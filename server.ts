import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini AI client to prevent startup crashes if key is missing
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined. Please add it in the Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

interface AIRequestOptions {
  customApiKey?: string;
  selectedModel?: string;
  systemInstruction?: string;
  prompt?: string;
  message?: string;
  history?: Array<{ role: string; text: string }>;
  responseMimeType?: string;
  responseSchema?: any;
  temperature?: number;
}

async function executeAIRequest(options: AIRequestOptions): Promise<string> {
  const {
    customApiKey,
    selectedModel = "gemini-2.5-flash",
    systemInstruction,
    prompt,
    message,
    history,
    responseMimeType,
    responseSchema,
    temperature = 0.7,
  } = options;

  const modelLower = selectedModel.toLowerCase();
  const isGemini = modelLower.startsWith("gemini-") || modelLower.startsWith("tunedmodels/");
  const isOpenAI = modelLower.startsWith("gpt-") || modelLower.startsWith("o1-");
  const isDeepSeek = modelLower.startsWith("deepseek-");
  const isAnthropic = modelLower.startsWith("claude-");

  // Format single text prompt if any
  let textPrompt = prompt || "";
  if (message) {
    if (textPrompt) {
      textPrompt = `${textPrompt}\n\nUser: ${message}`;
    } else {
      textPrompt = message;
    }
  }

  // --- 1. GEMINI PROVIDER ---
  if (isGemini) {
    const apiKey = customApiKey || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Chave de API (Gemini API Key) não configurada. Defina-a no menu de configurações.");
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const config: any = {
      temperature,
    };
    if (systemInstruction) {
      config.systemInstruction = systemInstruction;
    }
    if (responseMimeType) {
      config.responseMimeType = responseMimeType;
    }
    if (responseSchema) {
      config.responseSchema = responseSchema;
    }

    let contents: any;
    if (history && history.length > 0) {
      contents = [
        ...history.map((msg: any) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        })),
        { role: "user", parts: [{ text: message || "" }] },
      ];
    } else {
      contents = textPrompt;
    }

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents,
      config,
    });

    return response.text;
  }

  // --- 2. OPENAI PROVIDER ---
  if (isOpenAI) {
    const apiKey = customApiKey || process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("Chave de API da OpenAI não encontrada. Por favor, configure-a no menu de configurações.");
    }

    const messages: any[] = [];
    if (systemInstruction) {
      messages.push({ role: "system", content: systemInstruction });
    }
    if (history && history.length > 0) {
      history.forEach((msg: any) => {
        messages.push({
          role: msg.role === "user" ? "user" : "assistant",
          content: msg.text,
        });
      });
    }
    messages.push({ role: "user", content: message || textPrompt });

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: selectedModel,
        messages,
        temperature,
        response_format: responseMimeType === "application/json" ? { type: "json_object" } : undefined,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Erro na OpenAI: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "";
  }

  // --- 3. DEEPSEEK PROVIDER ---
  if (isDeepSeek) {
    const apiKey = customApiKey || process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      throw new Error("Chave de API do DeepSeek não encontrada. Por favor, configure-a no menu de configurações.");
    }

    const messages: any[] = [];
    if (systemInstruction) {
      messages.push({ role: "system", content: systemInstruction });
    }
    if (history && history.length > 0) {
      history.forEach((msg: any) => {
        messages.push({
          role: msg.role === "user" ? "user" : "assistant",
          content: msg.text,
        });
      });
    }
    messages.push({ role: "user", content: message || textPrompt });

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: selectedModel,
        messages,
        temperature,
        response_format: responseMimeType === "application/json" ? { type: "json_object" } : undefined,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Erro no DeepSeek: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "";
  }

  // --- 4. ANTHROPIC PROVIDER ---
  if (isAnthropic) {
    const apiKey = customApiKey || process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      throw new Error("Chave de API da Anthropic não encontrada. Por favor, configure-a no menu de configurações.");
    }

    const messages: any[] = [];
    if (history && history.length > 0) {
      history.forEach((msg: any) => {
        messages.push({
          role: msg.role === "user" ? "user" : "assistant",
          content: msg.text,
        });
      });
    }
    messages.push({ role: "user", content: message || textPrompt });

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: selectedModel,
        system: systemInstruction || undefined,
        messages,
        max_tokens: 4096,
        temperature,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Erro na Anthropic: ${response.status} - ${errText}`);
    }

    const data = await response.json();
    return data.content?.[0]?.text || "";
  }

  throw new Error(`O modelo "${selectedModel}" não é suportado pelo nosso sistema.`);
}

// 1. API: Chat with AI Tutor
app.post("/api/tutor/chat", async (req, res) => {
  try {
    const { message, history, language, lessonTitle, customApiKey, selectedModel } = req.body;

    const systemInstruction = `Você é o "DevMestre", um tutor de programação paciente, amigável, didático e altamente qualificado.
Você está ajudando o usuário a aprender programação.
O usuário está estudando a linguagem: ${language || "Geral"}.
${lessonTitle ? `A lição atual é: "${lessonTitle}".` : ""}
Seja objetivo, use Markdown para formatar suas respostas, e inclua pequenos exemplos de código explicativos sempre que relevante.
Responda sempre em Português do Brasil de forma empática e encorajadora.`;

    const text = await executeAIRequest({
      customApiKey,
      selectedModel,
      systemInstruction,
      message,
      history,
      temperature: 0.7,
    });

    res.json({ text });
  } catch (error: any) {
    console.error("Erro no chat do tutor:", error);
    res.status(500).json({ error: error.message || "Erro desconhecido ao chamar o Tutor de IA." });
  }
});

// 2. API: Explain Code Line-by-Line
app.post("/api/tutor/explain", async (req, res) => {
  try {
    const { code, language, customApiKey, selectedModel } = req.body;
    if (!code) {
      return res.status(400).json({ error: "Nenhum código fornecido para explicar." });
    }

    const prompt = `Analise detalhadamente o seguinte código em ${language || "desconhecido"} e explique-o de forma clara e simples para iniciantes.
Divida a explicação em partes lógicas ou comente linha por linha.
Mostre quais são os conceitos fundamentais envolvidos (variáveis, loops, funções, etc.).

Código:
\`\`\`${language || ""}
${code}
\`\`\``;

    const text = await executeAIRequest({
      customApiKey,
      selectedModel,
      systemInstruction: "Você é um professor de programação brilhante que simplifica códigos complexos de forma didática e visual em Português.",
      prompt,
      temperature: 0.3,
    });

    res.json({ text });
  } catch (error: any) {
    console.error("Erro ao explicar código:", error);
    res.status(500).json({ error: error.message || "Erro ao gerar explicação do código." });
  }
});

// 3. API: Debug and Fix Code
app.post("/api/tutor/debug", async (req, res) => {
  try {
    const { code, language, errorMsg, customApiKey, selectedModel } = req.body;
    if (!code) {
      return res.status(400).json({ error: "Nenhum código fornecido para depuração." });
    }

    const prompt = `O usuário está tendo problemas com o código a seguir na linguagem ${language || "desconhecida"}.
${errorMsg ? `Mensagem de erro observada: ${errorMsg}` : "O código não está funcionando como esperado ou possui erros."}

Código problemático:
\`\`\`${language || ""}
${code}
\`\`\`

Por favor:
1. Identifique os erros ou pontos de melhoria no código.
2. Explique por que o erro acontece em termos simples.
3. Forneça o código corrigido completo dentro de um bloco de código markdown correspondente.
4. Dê uma dica preventiva para evitar esse erro no futuro.`;

    const text = await executeAIRequest({
      customApiKey,
      selectedModel,
      systemInstruction: "Você é um engenheiro de software sênior e mentor de programação especialista em depuração e refatoração de código. Responda em Português do Brasil.",
      prompt,
      temperature: 0.2,
    });

    res.json({ text });
  } catch (error: any) {
    console.error("Erro ao depurar código:", error);
    res.status(500).json({ error: error.message || "Erro ao depurar o código fornecido." });
  }
});

// 4. API: Generate Dynamic Coding Challenge (JSON schema response)
app.post("/api/tutor/challenge", async (req, res) => {
  try {
    const { language, difficulty, topic, customApiKey, selectedModel } = req.body;

    const prompt = `Gere um desafio de programação criativo e realista na linguagem ${language || "JavaScript"}.
Nível de dificuldade: ${difficulty || "Iniciante"}.
Tópico/Tema desejado: ${topic || "Lógica Básica"}.

A resposta DEVE ser um objeto JSON válido (com as chaves listadas abaixo) e estar inteiramente em Português do Brasil.
Você DEVE preencher exatamente:
- title: O título atraente do desafio.
- description: A descrição detalhada do desafio em português brasileiro, incluindo exemplos de entrada e saída.
- starterCode: O código inicial estruturado de forma que o usuário tenha que completar (com comentários explicativos ou uma função vazia).
- solutionTemplate: Uma sugestão de código de solução correta completa para quando o usuário desistir ou quiser conferir.
- testCases: Um array com 2 ou 3 exemplos de casos de teste simples (input descritivo e expectedOutput descritivo em formato string).`;

    const text = await executeAIRequest({
      customApiKey,
      selectedModel,
      systemInstruction: "Você é um assistente de IA especialista que gera desafios de programação em formato JSON.",
      prompt,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: {
            type: Type.STRING,
            description: "Título curto e claro do desafio.",
          },
          description: {
            type: Type.STRING,
            description: "Descrição detalhada do desafio e regras em português.",
          },
          starterCode: {
            type: Type.STRING,
            description: "Código esqueleto inicial para o usuário modificar.",
          },
          solutionTemplate: {
            type: Type.STRING,
            description: "Solução ideal completa para resolver o desafio.",
          },
          testCases: {
            type: Type.ARRAY,
            description: "Lista de casos de teste para o usuário validar seu raciocínio.",
            items: {
              type: Type.OBJECT,
              properties: {
                input: { type: Type.STRING, description: "Valores ou caso de entrada." },
                expectedOutput: { type: Type.STRING, description: "Resultado esperado formatado em string." },
              },
              required: ["input", "expectedOutput"],
            },
          },
        },
        required: ["title", "description", "starterCode", "solutionTemplate", "testCases"],
      },
      temperature: 0.8,
    });

    const challengeData = JSON.parse(text.trim());
    res.json(challengeData);
  } catch (error: any) {
    console.error("Erro ao gerar desafio:", error);
    res.status(500).json({ error: error.message || "Erro ao gerar desafio dinâmico com IA." });
  }
});

// 5. API: Dynamic Language Curriculum Generator (for supporting 100s of languages on the fly)
app.post("/api/tutor/generate-language-content", async (req, res) => {
  try {
    const { languageId, languageName, languageDescription, mode, customApiKey, selectedModel } = req.body;
    if (!languageName) {
      return res.status(400).json({ error: "O nome da linguagem é obrigatório." });
    }

    const isSuper = mode === "super_completa";
    const isMestre = mode === "mestre_20";
    const numLessons = isMestre ? 20 : (isSuper ? 6 : 3);
    const numQuizzes = isMestre ? 10 : (isSuper ? 6 : 3);
    const numTemplates = isMestre ? 5 : (isSuper ? 5 : 2);

    const prompt = `Gere um currículo super dinâmico e otimizado de aprendizado para a linguagem de programação "${languageName}" (${languageDescription || "Linguagem de desenvolvimento"}).
Você deve fornecer exatamente:
1. ${numLessons} lições estruturadas e progressivas: uma lição para cada nível desde o básico até o avançado. Cada lição deve conter teoria super objetiva, rápida e focada em português do Brasil formatada em Markdown com exemplos curtos de código, e um código inicial prático para o usuário exercitar.
${isSuper ? `As lições devem cobrir detalhadamente os seguintes tópicos estruturados, com explicações objetivas e diretas (máximo 80 palavras de teoria por lição):
- Lição 1: Introdução, Conceito, Sintaxe Básica, Variáveis e Tipos de Dados primitivos e mutabilidade (iniciante).
- Lição 2: Estruturas Condicionais, Controle de Fluxo e Loops/Laços de Repetição (iniciante).
- Lição 3: Funções, Parâmetros, Escopo e Vetores/Arrays básicos (intermediario).
- Lição 4: Paradigmas de Programação (Orientação a Objetos ou Programação Funcional etc.) e Coleções complexas (intermediario).
- Lição 5: Conceito Avançado da linguagem, como Tratamento de Erros, Concorrência/Assincronismo ou gerenciamento de memória (avancado).
- Lição 6: Recursos super avançados, como metaprogramação, boas práticas, otimização ou testes (super_avancado).` : isMestre ? `Como o modo selecionado é "mestre_20", gere EXATAMENTE 20 lições que cubram a jornada inteira de ponta a ponta desde conceitos básicos (iniciante: lições 1 a 6), passando por tópicos intermediários estruturados (intermediário: lições 7 a 12), tópicos avançados (avançado: lições 13 a 17) e tópicos de nível mestre (super_avancado: lições 18 a 20).
IMPORTANTE: Para evitar estouro de limite de tokens da API e erros de timeout, mantenha o campo 'content' (teoria) de cada uma das 20 lições extremamente resumido, objetivo e curto (de 40 a 75 palavras no máximo), focando puramente no conceito essencial e instruções para praticar no playground de forma ultra-focada.` : `As lições devem cobrir nível iniciante (básico), intermediário (estruturas de controle/coleções) e avançado (recursos sofisticados). Mantenha a teoria super concisa (máximo 60 palavras).`}
2. ${numQuizzes} perguntas de quiz curtas e desafiadoras sobre a sintaxe, peculiaridades e recursos típicos desta linguagem. Mantenha as perguntas objetivas e o campo 'explanation' bem curto (máximo 30 palavras).
3. ${numTemplates} templates de playground bem curtos e interessantes (ex: Olá Mundo, variáveis, loops, funções, classes, etc.).

A resposta DEVE obedecer estritamente ao esquema de JSON abaixo e estar inteiramente em Português do Brasil.`;

    const text = await executeAIRequest({
      customApiKey,
      selectedModel,
      systemInstruction: "Você é um assistente de IA especialista que gera currículos educacionais estruturados em formato JSON.",
      prompt,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          lessons: {
            type: Type.ARRAY,
            description: `Lista com exatamente ${numLessons} lições progressivas da linguagem em português.`,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING, description: "ID único legível (ex: rust-l1, rust-l2, rust-l3)." },
                title: { type: Type.STRING, description: "Título atraente da lição incluindo numeração (ex: 1. Introdução à Sintaxe Rust)." },
                level: { type: Type.STRING, enum: ["iniciante", "intermediario", "avancado", "super_avancado"], description: "Dificuldade." },
                estimatedTime: { type: Type.STRING, description: "Tempo estimado (ex: 12 min)." },
                content: { type: Type.STRING, description: "Conteúdo completo da lição em português contendo explicações detalhadas em Markdown e blocos de códigos." },
                initialCode: { type: Type.STRING, description: "Código de partida completo com comentários explicativos para o usuário praticar." },
                codeLanguage: { type: Type.STRING, description: "A identificação curta da linguagem para o realce de sintaxe (ex: rust, swift, clojure)." }
              },
              required: ["id", "title", "level", "estimatedTime", "content", "initialCode", "codeLanguage"]
            }
          },
          quizzes: {
            type: Type.ARRAY,
            description: `Lista de exatamente ${numQuizzes} perguntas de quiz para testar os tópicos.`,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING, description: "ID único (ex: rust-q1)." },
                question: { type: Type.STRING, description: "Pergunta clara e objetiva sobre a linguagem." },
                options: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Lista com exatamente 4 opções de resposta."
                },
                correctAnswerIndex: { type: Type.INTEGER, description: "Índice de 0 a 3 correspondente à alternativa correta." },
                explanation: { type: Type.STRING, description: "Explicação didática detalhada de por que essa opção está correta." }
              },
              required: ["id", "question", "options", "correctAnswerIndex", "explanation"]
            }
          },
          templates: {
            type: Type.ARRAY,
            description: `Lista com exatamente ${numTemplates} templates iniciais práticos para o Playground.`,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING, description: "Nome curto do template (ex: Olá, Mundo!, Estruturas Básicas)." },
                code: { type: Type.STRING, description: "Código fonte completo do template." },
                description: { type: Type.STRING, description: "Breve descrição do que este template demonstra." }
              },
              required: ["name", "code", "description"]
            }
          }
        },
        required: ["lessons", "quizzes", "templates"]
      },
      temperature: 0.6,
    });

    const generatedData = JSON.parse(text.trim());
    res.json(generatedData);
  } catch (error: any) {
    console.error("Erro ao gerar currículo dinâmico:", error);
    res.status(500).json({ error: error.message || "Erro de IA ao gerar currículo dinâmico de linguagem." });
  }
});

// Configure Vite integration or static file serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Iniciando servidor em modo desenvolvimento com Vite Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Iniciando servidor em modo produção...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando com sucesso em http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Falha ao iniciar o servidor de desenvolvimento:", err);
});

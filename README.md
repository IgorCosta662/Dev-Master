# 🎓 DevMestre - Plataforma Gamificada & Tutor de Programação com IA

O **DevMestre** é uma plataforma full-stack moderna e gamificada desenvolvida para ensinar linguagens de programação e tecnologias web. Combinando trilhas teóricas aprofundadas, playgrounds interativos integrados, questionários (quizzes) com feedback imediato e um **Tutor de IA Integrado (Professor IA)** de alta fidelidade movido pelo modelo Gemini do Google.

O sistema permite que estudantes aprendam no seu próprio ritmo, executem códigos de forma interativa diretamente no navegador e expandam seu conhecimento sob demanda gerando grades curriculares de até **20 níveis de maestria**.

---

## 🚀 Como Iniciar o Projeto de Forma Simples e Rápida

Se você está utilizando o Windows, criamos um script automatizador para facilitar a inicialização.

### Opção 1: Inicialização Automática (Windows)
1. Certifique-se de ter o [Node.js (v18 ou superior)](https://nodejs.org/) instalado.
2. Dê um duplo clique no arquivo **`iniciar.bat`** na raiz do projeto.
3. O script irá:
   - Validar se o Node.js está instalado.
   - Criar seu arquivo `.env` local caso ele não exista.
   - Instalar automaticamente todas as dependências necessárias.
   - Inicializar o servidor na porta `3000`.
4. Abra seu navegador e acesse: **[http://localhost:3000](http://localhost:3000)**

---

### Opção 2: Inicialização Manual (Qualquer Sistema Operacional)

Caso prefira iniciar pelo Terminal ou esteja no macOS/Linux:

1. **Instalar Dependências**:
   ```bash
   npm install
   ```

2. **Configurar Chaves de API**:
   Copie o arquivo de exemplo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```
   Abra o arquivo `.env` e defina sua chave do Gemini:
   ```env
   GEMINI_API_KEY="SUA_CHAVE_AQUI"
   ```

3. **Iniciar o Servidor em Desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse **[http://localhost:3000](http://localhost:3000)** no seu navegador.

---

## 🎨 Principais Recursos & Funcionalidades

### 📂 1. Catálogo de Trilhas Nativas e Expansão Dinâmica
A plataforma vem pré-carregada de fábrica com grades robustas para:
* 🌐 **HTML & CSS**: Estrutura básica, Flexbox, CSS Grid Layout, Responsividade, Variáveis e Animações.
* 💾 **Banco de Dados SQL**: Consultas SELECT básicas, Filtros WHERE, Agrupamento GROUP BY, INNER/LEFT JOINs, Subqueries e Transações Seguras.
* 🐍 **Python**: Estruturas de decisão, Laços, List Comprehensions, Tratamento de Erros, Classes/Herança, Lambdas e manipulação segura de arquivos.
* ⚙️ **C++ (Compilado)**: Fluxo de controle, ponteiros de memória de baixo nível, structs, POO e manipulação genérica com Templates.

### ⚡ 2. Gerador IA de Grades Curriculares com Três Níveis de Profundidade
O usuário pode pesquisar ou inventar qualquer tecnologia (ex: *Rust, TypeScript, Docker, Kubernetes, React, Go, Java*) e pedir para a IA estruturar instantaneamente o currículo em 3 modos de profundidade:
1. **Padrão (3 Lições)**: Lições compactas essenciais para um aprendizado relâmpago.
2. **Completo (6 Lições)**: Nível aprofundado cobrindo do iniciante ao super avançado com múltiplos códigos e quizzes estruturados.
3. **Mestre (20 Lições) 🌟**: Uma jornada de ponta a ponta contendo 20 aulas perfeitamente sequenciadas do básico, passando por estruturas intermediárias, práticas avançadas e maestria arquitetural com 10 questionários de fixação.

### 💻 3. Playgrounds & Ambientes Sandbox de Código
Cada lição acompanha um editor de código interativo contextualizado:
* Códigos de partida comentados.
* Console virtual integrado que simula a saída do terminal para que o estudante faça modificações e veja o resultado de forma imediata.
* Compatível com sintaxes de múltiplas linguagens (HTML/CSS, SQL, JavaScript, Python, C++, etc.).

### 🤖 4. Professor IA (Tutor Interativo) Multiuso
Um painel lateral ou aba de bate-papo permite que você converse em tempo real com o tutor de IA do DevMestre para:
* **Perguntar sobre a Aula**: Um botão de atalho em cada lição que carrega o contexto do que você está lendo para tirar dúvidas específicas de forma contextualizada.
* **Explicar Código**: Selecione ou cole qualquer trecho de código para que o Professor IA detalhe linha por linha em linguagem amigável.
* **Depurar Erros (Debug)**: Envie mensagens de erro ou códigos quebrados para que o assistente identifique a falha estrutural e ofereça a solução corrigida.
* **Desafio Prático**: Peça um desafio de código sob medida para seu nível atual. A IA gera um problema prático e avalia sua resposta interativamente!

### 📝 5. Quizzes Gamificados de Fixação
* Conjunto de perguntas de múltipla escolha divertidas integradas em cada tecnologia.
* Avaliação em tempo real com mudança visual dinâmica para acertos e erros.
* Explicação detalhada de cada resposta disponível imediatamente após a submissão para garantir o aprendizado conceitual definitivo.

---

## 🛠️ Detalhes Técnicos e Arquitetura do Projeto

O projeto utiliza uma arquitetura full-stack integrada de alto desempenho:
* **Frontend**: React 18+, Vite, TypeScript, Tailwind CSS (estilização moderna e de alto contraste em tons escuros), Lucide React para ícones modernos, e Framer Motion para animações fluidas de interface.
* **Backend**: Express com Node.js rodando um servidor unificado na porta `3000`.
* **Motor de IA**: Integrou-se de forma nativa o SDK `@google/genai` (versão moderna do Google AI) rodando exclusivamente em rotas protegidas do servidor para manter sua chave de API segura e fora do navegador.
* **Armazenamento**: O progresso, conquistas de pontos de experiência (XP), logs de quizzes e códigos customizados criados pelos usuários no playground são persistidos dinamicamente de forma segura no `localStorage` do navegador do usuário.

---

## 🚀 Scripts de Produção e Build

Caso deseje compilar o projeto para produção ou disponibilizar em containers:

* **Compilar para Produção** (Compila o frontend estático e gera o servidor em um único arquivo otimizado CommonJS em `dist/server.cjs` usando `esbuild`):
  ```bash
  npm run build
  ```
* **Iniciar em Produção**:
  ```bash
  npm start
  ```

---

*Desenvolvido com carinho para inspirar e acelerar a jornada de novos desenvolvedores ao redor do mundo. Bons estudos, Mestre!* 🚀

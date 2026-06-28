import { ProgrammingLanguage, LibraryLanguage } from "./types";

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: "javascript",
    name: "JavaScript",
    description: "A linguagem que move a web. Essencial para criar páginas web interativas, servidores, aplicativos móveis e muito mais.",
    iconName: "FileJson",
    color: "amber",
    bgGradient: "from-amber-400 to-yellow-500",
    templates: [
      {
        name: "Olá, Mundo!",
        code: `// Bem-vindo ao Playground JavaScript!
const nome = "Desenvolvedor";
console.log("Olá, Mundo!");
console.log(\`Olá, \${nome}! Pronto para aprender?\`);

// Sinta-se à vontade para modificar este código!
`,
        description: "Estrutura básica de um script em JavaScript."
      },
      {
        name: "Cálculo do Fatorial",
        code: `// Função para calcular o fatorial de um número de forma recursiva
function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}

const numero = 5;
const resultado = fatorial(numero);
console.log(\`O fatorial de \${numero} é: \${resultado}\`);
`,
        description: "Exemplo prático usando recursividade e funções."
      },
      {
        name: "Métodos de Array",
        code: `// Trabalhando com arrays em JavaScript de forma moderna
const numeros = [10, 15, 20, 25, 30, 35, 40];

// Filtrar números pares
const pares = numeros.filter(num => num % 2 === 0);

// Dobrar todos os valores
const dobrados = numeros.map(num => num * 2);

console.log("Números Originais:", numeros);
console.log("Números Pares:", pares);
console.log("Números Dobrados:", dobrados);
`,
        description: "Aprenda a manipular listas com filter e map."
      }
    ],
    lessons: [
      {
        id: "js-l1",
        title: "1. Variáveis, Tipos e Operadores",
        level: "iniciante",
        estimatedTime: "10 min",
        content: `### Introdução ao JavaScript

JavaScript é uma linguagem de alto nível, interpretada e dinâmica, muito famosa por rodar no navegador. Ela nos permite injetar comportamento em páginas da web.

#### Declarando Variáveis

No JavaScript moderno, usamos principalmente \`let\` e \`const\` para armazenar dados. A diferença crucial é:
* **\`let\`**: Permite reatribuição de valor.
* **\`const\`**: Cria uma variável cujo valor é fixo e não pode ser reatribuído após a definição.

\`\`\`javascript
const nome = "Alice"; // String
let idade = 25;       // Number (números inteiros ou decimais)
let estudante = true; // Boolean (true ou false)

idade = 26; // Permitido com let!
// nome = "Bob"; // Erro! const não permite reatribuição.
\`\`\`

#### Operadores Básicos

* **Aritméticos**: \`+\` (soma), \`-\` (subtração), \`*\` (multiplicação), \`/\` (divisão), \`%\` (resto da divisão).
* **Comparação**: \`===\` (estritamente igual), \`!==\` (diferente), \`>\` (maior que), \`<\` (menor que).
* **Lógicos**: \`&&\` (E lógico), \`||\` (OU lógico), \`!\` (NÃO/Negação).

*(Dica: Sempre prefira usar \`===\` em vez de \`==\`, pois o triplo igual também compara o tipo da variável, garantindo maior consistência no código).*`,
        initialCode: `// Pratique declarando suas próprias variáveis!
const usuario = "Seu Nome";
let nivelProgresso = 0;

nivelProgresso = nivelProgresso + 10;

console.log("Nome do Usuário:", usuario);
console.log("Progresso atual:", nivelProgresso);
`,
        codeLanguage: "javascript"
      },
      {
        id: "js-l2",
        title: "2. Estruturas de Controle de Fluxo",
        level: "intermediario",
        estimatedTime: "12 min",
        content: `### Condicionais e Loops no JavaScript

Para criar programas dinâmicos, precisamos que o computador tome decisões e repita tarefas automaticamente.

#### Condicional \`if-else\`

Avalia se uma expressão é verdadeira para executar um bloco de código:

\`\`\`javascript
const nota = 8.5;

if (nota >= 7) {
  console.log("Aprovado!");
} else if (nota >= 5) {
  console.log("Recuperação.");
} else {
  console.log("Reprovado.");
}
\`\`\`

#### Loops: \`for\` e \`while\`

Usados para repetir tarefas. O loop \`for\` é excelente quando sabemos exatamente quantas vezes queremos repetir algo:

\`\`\`javascript
// Loop de 0 a 4
for (let i = 0; i < 5; i++) {
  console.log("Número atual:", i);
}
\`\`\`

Já o \`while\` executa enquanto uma condição for verdadeira:

\`\`\`javascript
let contador = 3;
while (contador > 0) {
  console.log("Contagem regressiva:", contador);
  contador--;
}
\`\`\``,
        initialCode: `// Escreva um loop 'for' que exiba os números de 1 a 10 no console!
console.log("Contagem:");

for (let i = 1; i <= 10; i++) {
  // Verifique se o número é par antes de imprimir!
  if (i % 2 === 0) {
    console.log(i + " é par");
  } else {
    console.log(i + " é ímpar");
  }
}
`,
        codeLanguage: "javascript"
      },
      {
        id: "js-l3",
        title: "3. Funções e Métodos Modernos de Array",
        level: "avancado",
        estimatedTime: "15 min",
        content: `### Funções e Programação Funcional

Funções são blocos de códigos reaproveitáveis que realizam uma tarefa específica.

#### Sintaxe de Funções e Arrow Functions

Podemos declarar funções de maneira clássica ou com a sintaxe moderna de setas (\`arrow functions\`), que são mais curtas e limpas:

\`\`\`javascript
// Função Clássica
function somar(a, b) {
  return a + b;
}

// Arrow Function equivalente
const somarArrow = (a, b) => a + b;
\`\`\`

#### Métodos Modernos de Array (\`map\`, \`filter\`, \`reduce\`)

Esses métodos facilitam muito a manipulação de dados em listas sem a necessidade de loops \`for\` tradicionais:

* **\`map\`**: Executa uma função para cada elemento e retorna um novo array transformado.
* **\`filter\`**: Cria um novo array contendo apenas os itens que passaram no teste da função.
* **\`reduce\`**: Acumula todos os valores do array em um único resultado (ex: somatório total).

\`\`\`javascript
const precos = [10, 20, 30, 40];
const precosComDesconto = precos.map(preco => preco * 0.9); // 10% de desconto
console.log(precosComDesconto); // [9, 18, 27, 36]
\`\`\``,
        initialCode: `// Complete a arrow function para dobrar os valores ímpares!
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. Filtre apenas os ímpares
const impares = valores.filter(num => num % 2 !== 0);

// 2. Mapeie para obter o dobro de cada um
const dobroDosImpares = impares.map(num => num * 2);

console.log("Valores ímpares:", impares);
console.log("Dobro dos ímpares:", dobroDosImpares);
`,
        codeLanguage: "javascript"
      },
      {
        id: "js-l4",
        title: "4. Programação Assíncrona, Promises e Async/Await",
        level: "intermediario",
        estimatedTime: "15 min",
        content: `### Sincronismo vs Assincronismo no JavaScript

JavaScript é de thread única, mas lida de forma primorosa com tarefas pesadas ou externas (como buscar dados de uma API) sem travar a interface do usuário. Isso é feito de forma **assíncrona**.

#### O que é uma Promise?

Uma \`Promise\` representa um valor que pode estar disponível agora, no futuro ou nunca. Ela possui três estados possíveis:
1. **Pending** (Pendente): Estado inicial.
2. **Fulfilled** (Resolvida): A operação foi concluída com sucesso.
3. **Rejected** (Rejeitada): A operação falhou.

\`\`\`javascript
const carregarDados = () => {
  return new Promise((resolve, reject) => {
    const sucesso = true;
    setTimeout(() => {
      if (sucesso) {
        resolve("Dados do servidor carregados com sucesso!");
      } else {
        reject("Erro ao conectar com o servidor.");
      }
    }, 1500);
  });
};
\`\`\`

#### O padrão Async/Await

Para evitar o aninhamento excessivo de callbacks (conhecido como *callback hell*), o JavaScript moderno introduziu as palavras-chave \`async\` e \`await\`, permitindo-nos escrever código assíncrono que se parece com síncrono.

\`\`\`javascript
async function executarBusca() {
  try {
    console.log("Iniciando requisição...");
    const resultado = await carregarDados(); // Aguarda a Promise se resolver
    console.log(resultado);
  } catch (erro) {
    console.error("Capturado:", erro);
  } finally {
    console.log("Requisição concluída.");
  }
}
\`\`\``,
        initialCode: `// Complete a simulação assíncrona abaixo usando async/await!
const obterPrecoAcao = (ticket) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ticket, preco: (Math.random() * 100).toFixed(2) });
    }, 1000);
  });
};

async function mostrarFormatado() {
  console.log("Buscando dados da bolsa...");
  
  // 1. Chame obterPrecoAcao usando 'await'
  const dados = await obterPrecoAcao("GOOGL");
  
  console.log(\`Ação: \${dados.ticket} | Preço Atual: $\${dados.preco}\`);
}

mostrarFormatado();
`,
        codeLanguage: "javascript"
      },
      {
        id: "js-l5",
        title: "5. Orientação a Objetos, Classes e Módulos",
        level: "avancado",
        estimatedTime: "15 min",
        content: `### Classes e Protótipos no JavaScript

JavaScript utiliza um modelo de herança baseado em protótipos, mas a sintaxe de classes introduzida no ES6 facilitou expressivamente a criação e organização de código orientado a objetos.

#### Declarando uma Classe

Usamos a palavra-chave \`class\`, um método construtor especial \`constructor()\` e métodos padrão:

\`\`\`javascript
class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  exibirDetalhes() {
    return \`Veículo: \${this.marca} \${this.modelo}\`;
  }
}
\`\`\`

#### Herança

Para criar uma subclasse que herda propriedades e métodos de outra classe, usamos \`extends\` e a chamada \`super()\` no construtor da classe filha:

\`\`\`javascript
class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    super(marca, modelo); // Chama o construtor do pai (Veiculo)
    this.portas = portas;
  }

  buzinar() {
    return \`O \${this.modelo} está buzinando: Bi-bi!\`;
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 4);
console.log(meuCarro.exibirDetalhes()); // "Veículo: Toyota Corolla"
console.log(meuCarro.buzinar());        // "O Corolla está buzinando: Bi-bi!"
\`\`\``,
        initialCode: `// Crie uma subclasse de ContaBancaria chamada ContaPoupanca que tenha juros!
class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  
  depositar(valor) {
    this.saldo += valor;
  }
}

// 1. Declare a classe ContaPoupanca herdando de ContaBancaria
class ContaPoupanca extends ContaBancaria {
  constructor(titular, saldo, taxaJuros) {
    super(titular, saldo);
    this.taxaJuros = taxaJuros;
  }
  
  aplicarJuros() {
    this.saldo += this.saldo * this.taxaJuros;
  }
}

const minhaPoupanca = new ContaPoupanca("Alice", 1000, 0.05);
minhaPoupanca.aplicarJuros();
console.log("Saldo com Juros:", minhaPoupanca.saldo); // Esperado: 1050
`,
        codeLanguage: "javascript"
      },
      {
        id: "js-l6",
        title: "6. Metaprogramação, Proxies, Closures e Avançados",
        level: "super_avancado",
        estimatedTime: "20 min",
        content: `### Conceitos Super Avançados do JavaScript

Para alcançar o nível de mestre em JavaScript, é fundamental dominar conceitos internos como escopo lexical de Closures, metaprogramação de Proxies e otimizações de memória.

#### Closures (Clausuras)

Uma closure é a combinação de uma função empacotada com referências ao seu estado circundante (o **escopo lexical**). Em termos simples, uma função interna lembra do escopo de sua função pai mesmo após a função pai ter sido executada.

\`\`\`javascript
function criarContador() {
  let contagem = 0; // Variável encapsulada privada
  return {
    incrementar() {
      contagem++;
      return contagem;
    },
    obterValor() {
      return contagem;
    }
  };
}

const meuContador = criarContador();
console.log(meuContador.incrementar()); // 1
console.log(meuContador.incrementar()); // 2
\`\`\`

#### Proxies e Metaprogramação

O objeto \`Proxy\` permite que você crie um intermediador para outro objeto, interceptando e customizando operações fundamentais (como leitura e escrita de propriedades).

\`\`\`javascript
const usuario = { nome: "Igor", idade: 25 };

const validador = {
  set(target, prop, valor) {
    if (prop === "idade" && typeof valor !== "number") {
      throw new Error("A idade deve ser um número!");
    }
    target[prop] = valor;
    return true;
  }
};

const usuarioProxy = new Proxy(usuario, validador);
// usuarioProxy.idade = "vinte"; // Lança um erro!
\`\`\``,
        initialCode: `// Implemente uma closure de fábrica para criar geradores de prefixo!
function criarGeradorPrefixo(prefixo) {
  // Retorne uma função que concatene o prefixo ao texto fornecido
  return function(texto) {
    return prefixo + " " + texto;
  };
}

const saudarProfessor = criarGeradorPrefixo("Prof.");
console.log(saudarProfessor("Igor")); // Esperado: "Prof. Igor"
console.log(saudarProfessor("Lucas")); // Esperado: "Prof. Lucas"
`,
        codeLanguage: "javascript"
      }
    ],
    quizzes: [
      {
        id: "js-q1",
        question: "Qual palavra-chave é recomendada para declarar uma variável que NÃO sofrerá reatribuição de valor?",
        options: ["var", "let", "const", "mutable"],
        correctAnswerIndex: 2,
        explanation: "O 'const' é usado para definir valores que não serão reatribuídos no decorrer do código, trazendo segurança e previsibilidade."
      },
      {
        id: "js-q2",
        question: "Qual o resultado de: typeof 42?",
        options: ["'string'", "'boolean'", "'number'", "'undefined'"],
        correctAnswerIndex: 2,
        explanation: "No JavaScript, o tipo de dados numérico (tanto inteiros quanto decimais) is representado como 'number'."
      },
      {
        id: "js-q3",
        question: "O que faz o método .filter() em um array?",
        options: [
          "Modifica o array original mudando a ordenação dos elementos",
          "Cria um novo array apenas com os elementos que satisfazem uma condição",
          "Transforma todos os elementos do array em strings",
          "Remove o primeiro elemento do array"
        ],
        correctAnswerIndex: 1,
        explanation: "O método .filter() aplica uma função de teste a cada elemento e retorna um novo array composto apenas de itens aprovados."
      },
      {
        id: "js-q4",
        question: "Qual o estado de uma Promise recém-criada que ainda não foi resolvida ou rejeitada?",
        options: ["fulfilled", "rejected", "pending", "settled"],
        correctAnswerIndex: 2,
        explanation: "Uma Promise recém-criada fica em estado 'pending' (pendente) até que a callback 'resolve' ou 'reject' seja invocada."
      },
      {
        id: "js-q5",
        question: "Como se herda uma classe em JavaScript usando a sintaxe moderna ES6?",
        options: ["class B implements A", "class B extends A", "class B inherits A", "class B prototype A"],
        correctAnswerIndex: 1,
        explanation: "A palavra-chave 'extends' é usada para herdar classes no padrão ES6 do JavaScript."
      },
      {
        id: "js-q6",
        question: "O que é uma Closure em JavaScript?",
        options: [
          "O fechamento imediato do navegador caso ocorra um erro de sintaxe",
          "Uma função que se lembra do escopo de sua função pai mesmo após o encerramento dela",
          "Um método especial usado para limpar a memória RAM ocupada por variáveis globais",
          "Um padrão de design restrito a linguagens compiladas"
        ],
        correctAnswerIndex: 1,
        explanation: "Uma closure ocorre quando uma função tem acesso ao escopo de sua função de outer (pai), mesmo depois desta já ter terminado de executar."
      }
    ]
  },
  {
    id: "python",
    name: "Python",
    description: "Conhecida por sua clareza e legibilidade. Dominante em ciência de dados, aprendizado de máquina, automação e desenvolvimento backend.",
    iconName: "Code2",
    color: "blue",
    bgGradient: "from-blue-400 to-sky-600",
    templates: [
      {
        name: "Olá, Mundo!",
        code: `# Bem-vindo ao Playground Python!
nome = "Estudante"
print("Olá, Mundo!")
print(f"Olá, {nome}! Pronto para aprender a programar em Python?")
`,
        description: "Exemplo inicial do Python usando f-strings para formatação."
      },
      {
        name: "Verificador de Palíndromo",
        code: `# Função que verifica se uma palavra é um palíndromo (lê-se igual de trás para frente)
def eh_palindromo(palavra):
    # Converte para minúsculas e remove espaços
    palavra_limpa = palavra.lower().replace(" ", "")
    # Inverte a string usando fatiamento (slicing)
    return palavra_limpa == palavra_limpa[::-1]

testes = ["Arara", "Python", "A cara para o radar a cara"]

for t in testes:
    print(f"'{t}' é palíndromo? {eh_palindromo(t)}")
`,
        description: "Manipulação de strings e laços de repetição em Python."
      },
      {
        name: "Estatísticas Básicas",
        code: `# Calculando médias e métricas de uma lista de números
notas = [8.5, 7.0, 9.5, 6.0, 8.0, 10.0, 5.5]

soma = sum(notas)
quantidade = len(notas)
media = soma / quantidade

# Encontrar maior e menor nota
maior = max(notas)
menor = min(notas)

print(f"Total de Notas: {quantidade}")
print(f"Média Geral: {media:.2f}")
print(f"Maior Nota: {maior}")
print(f"Menor Nota: {menor}")
`,
        description: "Trabalhando com listas e funções embutidas."
      }
    ],
    lessons: [
      {
        id: "py-l1",
        title: "1. Variáveis, Sintaxe e Identação",
        level: "iniciante",
        estimatedTime: "8 min",
        content: `### Introdução ao Python

Python é uma linguagem extremamente popular por conta de sua sintaxe limpa e legibilidade exemplar. Ao contrário de linguagens como C++ e JavaScript que usam chaves \`{}\`, o Python utiliza a **identação** (espaços/tabs no início da linha) para delimitar blocos de código.

#### Variáveis Dinâmicas

Em Python, você não precisa declarar o tipo da variável; o interpretador infere o tipo automaticamente.

\`\`\`python
nome = "Carlos"       # Tipo str (string)
idade = 30            # Tipo int (inteiro)
altura = 1.75         # Tipo float (ponto flutuante)
gosta_de_cafe = True  # Tipo bool (booleano)
\`\`\`

#### A Importância da Identação

Veja como a identação define o que pertence a uma condição:

\`\`\`python
temperatura = 28

if temperatura > 25:
    print("Está calor!")  # Esta linha pertence ao bloco 'if'
    print("Ligue o ventilador.")
else:
    print("Está fresco ou frio.") # Esta linha pertence ao bloco 'else'

print("Fim da verificação.")  # Esta linha roda sempre (fora do bloco)
\`\`\``,
        initialCode: `# Escreva um script em Python que calcule a média de duas variáveis e decida se a pessoa foi aprovada!
nota1 = 7.5
nota2 = 8.0

media = (nota1 + nota2) / 2

print("A média do aluno é:", media)

if media >= 7.0:
    print("Situação: Aprovado!")
else:
    print("Situação: Recuperação.")
`,
        codeLanguage: "python"
      },
      {
        id: "py-l2",
        title: "2. Estruturas de Dados: Listas e Dicionários",
        level: "intermediario",
        estimatedTime: "12 min",
        content: `### Listas e Dicionários em Python

Armazenar grupos de dados é uma necessidade constante no desenvolvimento. O Python oferece ferramentas muito versáteis para isso.

#### Listas (\`Lists\`)

Uma lista é uma coleção ordenada de elementos, que podem ser de tipos diferentes e são identificados por índices que começam em \`0\`.

\`\`\`python
frutas = ["maçã", "banana", "cereja"]
frutas.append("morango")  # Adiciona ao final
print(frutas[0])          # Imprime "maçã"
print(len(frutas))        # Imprime 4 (tamanho da lista)
\`\`\`

#### Dicionários (\`Dictionaries\`)

Dicionários armazenam dados em pares de **chave: valor**, muito parecidos com objetos do JavaScript ou arquivos JSON.

\`\`\`python
aluno = {
    "nome": "Guilherme",
    "curso": "Engenharia de Software",
    "semestre": 3
}

print(aluno["nome"])     # Imprime "Guilherme"
aluno["matriculado"] = True # Adiciona chave dinamicamente
\`\`\``,
        initialCode: `# Crie um dicionário com informações de um livro e adicione-o a uma lista de livros favoritos!
livros_favoritos = []

livro1 = {
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "ano": 1954
}

livros_favoritos.append(livro1)

print("Quantidade de livros favoritos:", len(livros_favoritos))
print("Primeiro livro:", livros_favoritos[0]["titulo"])
`,
        codeLanguage: "python"
      },
      {
        id: "py-l3",
        title: "3. Compreensão de Listas e Funções",
        level: "avancado",
        estimatedTime: "15 min",
        content: `### Compreensão de Listas (List Comprehensions) e Funções

Python possui recursos elegantes para tornar o código mais conciso e expressivo.

#### Funções com Argumentos Nomeados e Padrão

As funções em Python são definidas com a palavra-chave \`def\`:

\`\`\`python
def saudar(nome, mensagem="Bem-vindo"):
    return f"{mensagem}, {nome}!"

print(saudar("Mariana")) # "Bem-vindo, Mariana!"
print(saudar("Pedro", "Olá")) # "Olá, Pedro!"
\`\`\`

#### Compreensão de Listas (\`List Comprehension\`)

É uma forma compacta e super rápida de construir listas a partir de outras listas, aplicando transformações ou filtros em uma única linha.

\`\`\`python
# Sintaxe: [expressao for item in sequencia if condicao]

numeros = [1, 2, 3, 4, 5]
quadrados = [n**2 for n in numeros] # Eleva todos ao quadrado
print(quadrados) # [1, 4, 9, 16, 25]

# Filtrando ao mesmo tempo
pares_quadrados = [n**2 for n in numeros if n % 2 == 0]
print(pares_quadrados) # [4, 16]
\`\`\``,
        initialCode: `# Utilize List Comprehension para filtrar apenas nomes com mais de 5 letras!
nomes = ["Ana", "Roberto", "Patricia", "Edu", "Cleo", "Guilherme"]

# Modifique esta linha para implementar a filtragem!
nomes_longos = [nome for nome in nomes if len(nome) > 5]

print("Nomes com mais de 5 caracteres:", nomes_longos)
`,
        codeLanguage: "python"
      },
      {
        id: "py-l4",
        title: "4. Tratamento de Erros e Exceções",
        level: "intermediario",
        estimatedTime: "12 min",
        content: `### Lidando com Imprevistos em Python: try-except

Bons programas devem ser robustos e não "quebrar" quando recebem dados incorretos ou falhas de hardware/conexão. Em Python, fazemos isso capturando exceções.

#### A Estrutura try-except

Colocamos o código arriscado dentro de um bloco \`try\`. Se ocorrer um erro, o fluxo é interrompido imediatamente e o bloco \`except\` correspondente é executado.

\`\`\`python
try:
    numero = int(input("Digite um número: "))
    resultado = 10 / numero
    print(f"O resultado é {resultado}")
except ValueError:
    print("Erro: Você deve digitar um número inteiro válido!")
except ZeroDivisionError:
    print("Erro: Não é possível dividir um número por zero!")
except Exception as e:
    print(f"Ocorreu um erro inesperado: {e}")
finally:
    print("Esta frase sempre será impressa, com ou sem erro.")
\`\`\`

#### Levantando Exceções com raise

Você também pode forçar a ocorrência de uma exceção caso uma regra de negócios seja quebrada:

\`\`\`python
def definir_idade(idade):
    if idade < 0:
        raise ValueError("A idade não pode ser negativa!")
    return idade
\`\`\``,
        initialCode: `# Modifique a função para capturar erros de divisão por zero de forma elegante!
def dividir_valores(a, b):
    try:
        # 1. Tente realizar a divisão
        return a / b
    except ZeroDivisionError:
        # 2. Capture o erro específico de divisão por zero
        return "Erro: Divisão por zero detectada!"

print(dividir_valores(10, 2))  # Esperado: 5.0
print(dividir_valores(5, 0))   # Esperado: Erro: Divisão por zero detectada!
`,
        codeLanguage: "python"
      },
      {
        id: "py-l5",
        title: "5. Orientação a Objetos (Classes, Construtores e Herança)",
        level: "avancado",
        estimatedTime: "15 min",
        content: `### Programação Orientada a Objetos em Python

Python suporta herança, encapsulamento e polimorfismo. Quase tudo em Python é, na verdade, um objeto.

#### Criando uma Classe e o método __init__

O método \`__init__\` é o construtor da classe. Ele inicializa os atributos do objeto. Todos os métodos de classe devem receber o parâmetro \`self\`, que referencia a instância atual do objeto.

\`\`\`python
class Cachorro:
    # Construtor
    def __init__(self, nome, raca):
        self.nome = nome
        self.raca = raca

    def latir(self):
        return f"{self.nome} diz: Au au!"
\`\`\`

#### Herança em Python

Para herdar atributos e métodos de uma classe-mãe, passamos o nome da classe entre parênteses:

\`\`\`python
class Animal:
    def __init__(self, nome):
        self.nome = nome
    
    def comer(self):
        return f"{self.nome} está comendo."

class Gato(Animal):
    def miar(self):
        return f"{self.nome} diz: Miau!"
\`\`\``,
        initialCode: `# Crie a classe 'Conta' e a subclasse 'ContaEspecial' com limite extra de crédito!
class Conta:
    def __init__(self, titular, saldo):
        self.titular = titular
        self.saldo = saldo

# 1. Crie ContaEspecial herdando de Conta e adicione o atributo 'limite'
class ContaEspecial(Conta):
    def __init__(self, titular, saldo, limite):
        super().__init__(titular, saldo)
        self.limite = limite
        
    def obter_saldo_total(self):
        return self.saldo + self.limite

minha_conta = ContaEspecial("Igor", 1500, 500)
print("Saldo disponível:", minha_conta.obter_saldo_total()) # Esperado: 2000
`,
        codeLanguage: "python"
      },
      {
        id: "py-l6",
        title: "6. Funções Lambda, Map, Filter e Manipulação de Arquivos",
        level: "super_avancado",
        estimatedTime: "18 min",
        content: `### Recursos Super Avançados do Python

Nesta lição final, dominaremos funções de uma única linha (\`lambda\`), mapeamento de coleções e manipulação segura de arquivos de disco.

#### Expressões Lambda

São funções anônimas extremamente curtas escritas em apenas uma linha. São excelentes para serem passadas como argumentos:

\`\`\`python
# Função tradicional
def dobro(x): return x * 2

# Equivalente lambda
dobrar = lambda x: x * 2
print(dobrar(5)) # 10
\`\`\`

#### Manipulação Segura com 'with'

Ao lidar com arquivos do sistema, use a instrução \`with\`. Ela garante que o arquivo seja fechado automaticamente ao final do bloco, prevenindo vazamentos de memória e arquivos corrompidos:

\`\`\`python
# Gravando dados
with open("exemplo.txt", "w") as arquivo:
    arquivo.write("Aprendendo Python avançado com DevMestre!")

# Lendo dados
with open("exemplo.txt", "r") as arquivo:
    conteudo = arquivo.read()
    print(conteudo)
\`\`\``,
        initialCode: `# Use expressões lambda e 'filter' para capturar apenas números maiores que 10!
numeros = [2, 15, 7, 24, 1, 11, 8, 30]

# 1. Complete a linha abaixo aplicando filter e lambda
filtrados = list(filter(lambda x: x > 10, numeros))

print("Números maiores que 10:", filtrados) # Esperado: [15, 24, 11, 30]
`,
        codeLanguage: "python"
      }
    ],
    quizzes: [
      {
        id: "py-q1",
        question: "Como o Python delimita blocos de código para loops ou condições?",
        options: [
          "Usando ponto e vírgula (;)",
          "Usando chaves {}",
          "Através de recuo/identação consistente",
          "Através de parênteses ()"
        ],
        correctAnswerIndex: 2,
        explanation: "O Python usa a identação obrigatória para indicar o escopo e controle de blocos de decisão ou loops."
      },
      {
        id: "py-q2",
        question: "Qual método é utilizado para adicionar um elemento ao final de uma lista em Python?",
        options: [".add()", ".push()", ".append()", ".insert()"],
        correctAnswerIndex: 2,
        explanation: "O método '.append()' insere o elemento fornecido como argumento ao final da lista existente."
      },
      {
        id: "py-q3",
        question: "O que retorna a seguinte instrução: [x * 2 for x in [1, 2, 3]]?",
        options: ["[1, 2, 3]", "[2, 4, 6]", "6", "[x, x, x]"],
        correctAnswerIndex: 1,
        explanation: "Trata-se de uma List Comprehension que multiplica cada elemento do array por 2, resultando em [2, 4, 6]."
      },
      {
        id: "py-q4",
        question: "Qual cláusula em Python é usada para capturar e tratar exceções ocorridas no bloco 'try'?",
        options: ["catch", "except", "throws", "rescue"],
        correctAnswerIndex: 1,
        explanation: "O Python utiliza a palavra-chave 'except' para capturar erros ocorridos no bloco 'try'."
      },
      {
        id: "py-q5",
        question: "Como referenciamos a instância atual do objeto dentro de métodos de classe em Python?",
        options: ["this", "self", "instance", "current"],
        correctAnswerIndex: 1,
        explanation: "O parâmetro 'self' é convencionado e obrigatório em métodos de classe para referenciar a própria instância do objeto."
      },
      {
        id: "py-q6",
        question: "Qual palavra-chave é usada para criar funções anônimas curtas em Python?",
        options: ["anonymous", "def", "lambda", "inline"],
        correctAnswerIndex: 2,
        explanation: "A palavra reservada 'lambda' cria pequenas funções anônimas descartáveis de apenas uma linha."
      }
    ]
  },
  {
    id: "html-css",
    name: "HTML & CSS",
    description: "A fundação visual de toda a internet. HTML estrutura os dados e CSS traz cores, tipografia, efeitos e layouts deslumbrantes.",
    iconName: "Palette",
    color: "pink",
    bgGradient: "from-rose-400 to-pink-600",
    templates: [
      {
        name: "Card de Perfil",
        code: `<!-- Estrutura HTML -->
<div class="profile-card">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Avatar" class="avatar" />
  <h2>Beatriz Santos</h2>
  <p class="role">Designer de Interface UI/UX</p>
  <p class="bio">Apaixonada por tipografia, minimalismo e designs modernos com CSS Grid e Flexbox.</p>
  <button class="btn-connect">Conectar</button>
</div>

<!-- Estilo CSS -->
<style>
  .profile-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    padding: 30px;
    max-width: 320px;
    text-align: center;
    font-family: 'Inter', sans-serif;
    margin: 20px auto;
  }
  .avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 3px solid #ff4a8b;
    object-fit: cover;
  }
  h2 {
    color: #2D3748;
    margin: 15px 0 5px 0;
    font-size: 1.4rem;
  }
  .role {
    color: #ff4a8b;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
  .bio {
    color: #718096;
    font-size: 0.85rem;
    line-height: 1.5;
  }
  .btn-connect {
    background: #ff4a8b;
    color: white;
    border: none;
    padding: 10px 24px;
    border-radius: 20px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 20px;
    transition: background 0.2s;
  }
  .btn-connect:hover {
    background: #e03571;
  }
</style>
`,
        description: "Um belo card de perfil estilizado de forma moderna."
      },
      {
        name: "Efeito Hover com Gradiente",
        code: `<div class="container">
  <div class="hover-box">
    <h3>Passe o Mouse!</h3>
    <p>Aprenda transições suaves de gradientes de fundo e sombras no CSS3 de maneira simples.</p>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }
  .hover-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    border-radius: 20px;
    max-width: 350px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                box-shadow 0.3s ease;
  }
  .hover-box:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 20px 30px rgba(118, 75, 162, 0.4);
  }
  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
  p {
    font-size: 0.9rem;
    opacity: 0.9;
    line-height: 1.6;
  }
</style>
`,
        description: "Demonstração de efeitos de animação e transições em CSS."
      }
    ],
    lessons: [
      {
        id: "hc-l1",
        title: "1. Estrutura Básica do HTML",
        level: "iniciante",
        estimatedTime: "8 min",
        content: `### Anatomia de uma Página HTML

O **HTML (HyperText Markup Language)** é a estrutura básica das páginas. Ele usa "tags" delimitadas por \`<\` e \`>\` para classificar conteúdos como parágrafos, cabeçalhos, imagens, etc.

#### Estrutura Básica Padrão

Toda página HTML possui elementos cruciais:
* **\`<html>\`**: O container principal da página.
* **\`<head>\`**: Contém metadados invisíveis, como o título que aparece na aba do navegador ou links de folhas de estilo.
* **\`<body>\`**: O conteúdo visual e interativo do site.

\`\`\`html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Meu Primeiro Site</title>
</head>
<body>
  <h1>Título Principal</h1>
  <p>Este é um parágrafo que os usuários conseguem ver na tela.</p>
</body>
</html>
\`\`\`

#### Tags Comuns

* **\`<h1>\`** a **\`<h6>\`**: Títulos de diferentes tamanhos hierárquicos.
* **\`<p>\`**: Blocos de texto simples.
* **\`<a>\`**: Links de navegação usando o atributo \`href\`.
* **\`<img>\`**: Exibição de imagens através de referências \`src\`.`,
        initialCode: `<!-- Crie um cabeçalho h1, um subtítulo h2 e um parágrafo simples! -->
<h1>Bem-vindo ao Meu Portal</h1>
<h2>Curso Prático de Frontend</h2>
<p>Hoje estou dando meus primeiros passos estruturando elementos semânticos.</p>
<a href="https://google.com" target="_blank">Clique aqui para visitar o Google!</a>
`,
        codeLanguage: "html"
      },
      {
        id: "hc-l2",
        title: "2. Introdução ao Estilo com CSS",
        level: "intermediario",
        estimatedTime: "11 min",
        content: `### CSS (Cascading Style Sheets)

Se o HTML é o esqueleto, o **CSS** é a vestimenta do site. Ele se baseia em **Seletores** para alterar propriedades visuais dos elementos.

#### Estrutura de uma Regra CSS

\`\`\`css
seletor {
  propriedade: valor;
}
\`\`\`

Por exemplo, para pintar todos os parágrafos de azul e mudar seu tamanho:

\`\`\`css
p {
  color: blue;
  font-size: 16px;
}
\`\`\`

#### Seletores Importantes

* **Seletor de Tag**: Aplica a todas as tags daquele tipo (ex: \`h1 { ... }\`).
* **Seletor de Classe (\`.\`)**: Aplica a qualquer elemento com aquele atributo \`class\` (ex: \`.destaque { ... }\`).
* **Seletor de ID (\`#\`)**: Aplica unicamente àquele elemento específico com aquele \`id\` (ex: \`#cabecalho { ... }\`).

#### O Box Model (Modelo de Caixa)

Todo elemento HTML é renderizado como uma caixa retangular. Essa caixa possui:
1. **Content**: O conteúdo em si.
2. **Padding**: O espaçamento interno da caixa.
3. **Border**: A borda ao redor da caixa.
4. **Margin**: O espaçamento externo que separa esta caixa de outras.`,
        initialCode: `<div class="cartao">
  <h3>Título do Cartão</h3>
  <p>Modifique os estilos CSS ao lado para adicionar preenchimento (padding) e uma borda bonita!</p>
</div>

<style>
  .cartao {
    background-color: #f7fafc;
    border: 2px solid #cbd5e0;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    font-family: sans-serif;
  }
  h3 {
    color: #2b6cb0;
    margin-top: 0;
  }
</style>
`,
        codeLanguage: "html"
      },
      {
        id: "hc-l3",
        title: "3. Layouts Modernos com Flexbox",
        level: "avancado",
        estimatedTime: "14 min",
        content: `### Dominando o Flexbox no CSS

O **Flexbox** é um modelo de layout unidimensional que revoluciona como organizamos, alinhamos e distribuímos espaço entre itens em uma interface, mesmo quando seu tamanho é desconhecido ou dinâmico.

#### Iniciando o Flexbox

Basta definir o container pai como \`display: flex;\`:

\`\`\`css
.container {
  display: flex;
}
\`\`\`

#### Alinhamento de Eixos

O Flexbox possui dois eixos principais: o **Main Axis** (eixo principal, padrão horizontal) e o **Cross Axis** (eixo transversal, padrão vertical).

* **\`justify-content\`**: Controla o alinhamento de itens ao longo do eixo principal.
  * \`flex-start\`: Junta tudo no início.
  * \`center\`: Centraliza os itens.
  * \`space-between\`: Espaçamento uniforme entre eles.
* **\`align-items\`**: Controla o alinhamento de itens no eixo transversal.
  * \`center\`: Centraliza os elementos verticalmente.
  * \`stretch\`: Estica os itens para preencher o container.

\`\`\`css
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\``,
        initialCode: `<div class="menu-container">
  <div class="logo">MinhaLogo</div>
  <div class="menu-links">
    <a href="#">Início</a>
    <a href="#">Serviços</a>
    <a href="#">Contato</a>
  </div>
</div>

<style>
  .menu-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3182ce;
    color: white;
    padding: 15px 30px;
    border-radius: 6px;
    font-family: Arial, sans-serif;
  }
  .menu-links a {
    color: white;
    text-decoration: none;
    margin-left: 15px;
    font-size: 0.95rem;
  }
  .menu-links a:hover {
    text-decoration: underline;
  }
</style>
`,
        codeLanguage: "html"
      },
      {
        id: "hc-l4",
        title: "4. Layouts Modernos com CSS Grid",
        level: "intermediario",
        estimatedTime: "12 min",
        content: `### Introdução ao CSS Grid Layout

Enquanto o Flexbox é excelente para layouts unidimensionais (uma linha ou uma coluna de cada vez), o **CSS Grid** é o sistema de layout bi-dimensional definitivo para a web. Ele permite alinhar elementos em linhas E colunas simultaneamente.

#### Iniciando o Grid

Para começar a usar, definimos a propriedade \`display: grid;\` no container pai. Em seguida, configuramos as colunas e as linhas:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr; /* Três colunas */
  grid-template-rows: auto;            /* Linha com tamanho automático */
  gap: 20px;                            /* Espaçamento entre as células */
}
\`\`\`

* **\`1fr\`**: Unidade de fração. Significa "uma fração do espaço disponível".
* **\`gap\`**: Define o espaçamento entre linhas e colunas de forma limpa.

#### Grid Template Areas

Uma das funcionalidades mais incríveis do Grid é nomear áreas da tela para posicionar elementos de forma semântica:

\`\`\`css
.layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
}

header { grid-area: header; }
sidebar { grid-area: sidebar; }
main { grid-area: content; }
footer { grid-area: footer; }
\`\`\``,
        initialCode: `<div class="bento-container">
  <div class="grid-item topo">Destaque Principal</div>
  <div class="grid-item lateral">Card Lateral</div>
  <div class="grid-item extra">Conteúdo Extra</div>
</div>

<style>
  .bento-container {
    display: grid;
    /* 1. Altere a linha abaixo para criar duas colunas de tamanho idêntico usando '1fr 1fr' */
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    font-family: sans-serif;
  }
  .grid-item {
    background: #edf2f7;
    border: 2px dashed #4299e1;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
  .topo {
    grid-column: span 2; /* Ocupa as duas colunas */
  }
</style>
`,
        codeLanguage: "html"
      },
      {
        id: "hc-l5",
        title: "5. Design Responsivo e Media Queries",
        level: "avancado",
        estimatedTime: "15 min",
        content: `### Tornando seu Site Adaptável a Qualquer Tela

Com a imensa variedade de dispositivos móveis, um bom desenvolvedor cria sites que se adaptam perfeitamente a smartphones, tablets e desktops gigantes. Chamamos isso de **Design Responsivo**.

#### Meta Tag Viewport

Antes de tudo, garanta que seu documento HTML possua esta tag na seção \`<head>\` para que navegadores móveis não finjam ser um desktop:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

#### O que são Media Queries?

As **Media Queries** permitem aplicar regras de CSS específicas dependendo do tamanho da tela ou de características do dispositivo do usuário (como orientação ou modo escuro).

\`\`\`css
/* Estilo padrão (Mobile-First) */
body {
  background-color: white;
  font-size: 14px;
}

/* Aplica apenas se a tela tiver largura de 768px ou mais (Tablets/Desktops) */
@media (min-width: 768px) {
  body {
    background-color: #f7fafc;
    font-size: 16px;
  }
}
\`\`\``,
        initialCode: `<div class="painel">
  <h2>Painel Informativo</h2>
  <p>Diminua ou aumente a visualização. Em telas grandes, esta caixa ficará com a cor verde e borda dupla!</p>
</div>

<style>
  .painel {
    background-color: #fffaf0;
    border: 2px solid #dd6b20;
    padding: 20px;
    border-radius: 10px;
    font-family: sans-serif;
  }
  
  /* 1. Adicione a media query de min-width 600px para mudar a cor de fundo! */
  @media (min-width: 600px) {
    .painel {
      background-color: #f0fff4;
      border: 3px double #38a169;
    }
  }
</style>
`,
        codeLanguage: "html"
      },
      {
        id: "hc-l6",
        title: "6. Variáveis CSS, Transições e Animações",
        level: "super_avancado",
        estimatedTime: "18 min",
        content: `### Animações, Variáveis Nativas e Alta Performance

Nesta lição final de CSS, daremos vida e personalidade à nossa página usando variáveis nativas, transições suaves e animações baseadas em quadros-chave (\`keyframes\`).

#### Variáveis CSS (Custom Properties)

Permitem armazenar valores reutilizáveis no topo do arquivo (geralmente no escopo \`:root\`) para fácil manutenção:

\`\`\`css
:root {
  --primary-color: #3182ce;
  --spacing: 15px;
}

button {
  background-color: var(--primary-color);
  padding: var(--spacing);
}
\`\`\`

#### Transições vs Animações (@keyframes)

* **\`transition\`**: Suaviza a mudança de um estado para o outro (ex: ao passar o mouse).
* **\`animation\`**: Cria movimentos independentes mais complexos usando múltiplos quadros-chave.

\`\`\`css
/* Transição Simples */
.btn {
  transition: background-color 0.3s ease-in-out;
}
.btn:hover {
  background-color: #2b6cb0;
}

/* Animação Complexa */
@keyframes flutuar {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.logo {
  animation: flutuar 3s infinite ease-in-out;
}
\`\`\``,
        initialCode: `<div class="caixa-animada">
  <span>✨ Flutuando ✨</span>
</div>

<style>
  :root {
    --box-color: #805ad5;
  }
  
  .caixa-animada {
    background-color: var(--box-color);
    color: white;
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    font-weight: bold;
    font-family: sans-serif;
    width: 150px;
    margin: 20px auto;
    
    /* 1. Aplique a animação 'flutuar' abaixo */
    animation: flutuar 2.5s infinite ease-in-out;
  }
  
  @keyframes flutuar {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  }
</style>
`,
        codeLanguage: "html"
      }
    ],
    quizzes: [
      {
        id: "hc-q1",
        question: "Qual tag HTML é utilizada para criar um link de hipertexto de navegação?",
        options: ["<link>", "<a>", "<href>", "<button>"],
        correctAnswerIndex: 1,
        explanation: "A tag <a> (anchor) é usada com o atributo 'href' para encaminhar o usuário a novos caminhos."
      },
      {
        id: "hc-q2",
        question: "Como selecionamos todos os elementos com a classe 'destaque' no CSS?",
        options: ["#destaque", "destaque", ".destaque", "*destaque"],
        correctAnswerIndex: 2,
        explanation: "No CSS, o caractere de ponto (.) é usado para referenciar seletores baseados em classes HTML."
      },
      {
        id: "hc-q3",
        question: "No Flexbox, qual propriedade serve para centralizar os itens de um container horizontalmente?",
        options: ["align-items: center", "justify-content: center", "text-align: center", "display: center"],
        correctAnswerIndex: 1,
        explanation: "A propriedade 'justify-content' regula a distribuição do eixo principal (horizontal por padrão), enquanto 'align-items' regula o eixo transversal (vertical)."
      },
      {
        id: "hc-q4",
        question: "Qual unidade do CSS Grid representa uma fração fracionária flexível do espaço livre?",
        options: ["px", "em", "fr", "%"],
        correctAnswerIndex: 2,
        explanation: "A unidade 'fr' (fractional unit) preenche dinamicamente frações equilibradas do container grid."
      },
      {
        id: "hc-q5",
        question: "Qual media query é comumente usada para aplicar regras CSS apenas a partir de telas com largura mínima de 768px?",
        options: ["@media (max-width: 768px)", "@media (min-width: 768px)", "@media (device-width: 768px)", "@screen-size 768px"],
        correctAnswerIndex: 1,
        explanation: "A condição (min-width: 768px) garante que a regra só será executada em dispositivos com largura de tela de 768px ou superior."
      },
      {
        id: "hc-q6",
        question: "Qual regra especial CSS usamos para definir múltiplos quadros-chave em uma animação complexa?",
        options: ["@animation", "@transition", "@keyframes", "@frames"],
        correctAnswerIndex: 2,
        explanation: "A regra '@keyframes' permite detalhar porcentagens e estados intermediários de movimentação e estilo."
      }
    ]
  },
  {
    id: "sql",
    name: "SQL",
    description: "A linguagem padrão para gerenciar dados em bancos relacionais. Imprescindível para qualquer aplicação com persistência corporativa de dados.",
    iconName: "Database",
    color: "emerald",
    bgGradient: "from-emerald-400 to-teal-600",
    templates: [
      {
        name: "Consulta de Clientes Ativos",
        code: `-- Selecionar clientes ativos cadastrados após 2024
SELECT id, nome, email, data_cadastro
FROM clientes
WHERE status = 'ativo' AND data_cadastro >= '2025-01-01'
ORDER BY data_cadastro DESC;
`,
        description: "Sintaxe padrão para filtrar e ordenar registros em SQL."
      },
      {
        name: "Métricas de Vendas por Categoria",
        code: `-- Calcular soma e quantidade de vendas faturadas agrupadas por categoria
SELECT 
    categoria, 
    COUNT(id) AS total_pedidos,
    SUM(valor_total) AS receita_total,
    ROUND(AVG(valor_total), 2) AS valor_medio_pedido
FROM vendas
WHERE status = 'pago'
GROUP BY categoria
HAVING SUM(valor_total) > 500
ORDER BY receita_total DESC;
`,
        description: "Utilizando agrupamentos, agregações e filtragem de grupos com HAVING."
      }
    ],
    lessons: [
      {
        id: "sql-l1",
        title: "1. Introdução a Bancos Relacionais e SELECT",
        level: "iniciante",
        estimatedTime: "7 min",
        content: `### O que é SQL?

O **SQL (Structured Query Language)** é a linguagem padrão utilizada para ler, escrever e interagir com Bancos de Dados Relacionados (como PostgreSQL, MySQL e SQLite).

#### O Comando \`SELECT\`

O comando mais comum em SQL é o \`SELECT\`, que instrui o banco a recuperar informações de uma tabela específica.

\`\`\`sql
-- Retorna todas as colunas da tabela de produtos
SELECT * FROM produtos;

-- Retorna apenas colunas selecionadas para poupar memória
SELECT id, nome, preco FROM produtos;
\`\`\`

#### O Filtro \`WHERE\`

Para filtrar os registros retornados, acoplamos a cláusula \`WHERE\`:

\`\`\`sql
SELECT nome, preco 
FROM produtos
WHERE preco > 100.00;
\`\`\``,
        initialCode: `-- Pratique selecionando apenas o nome e email de usuários ativos!
SELECT nome, email 
FROM usuarios
WHERE status = 'ativo';
`,
        codeLanguage: "sql"
      },
      {
        id: "sql-l2",
        title: "2. Filtrando e Ordenando com WHERE, AND, OR e ORDER BY",
        level: "intermediario",
        estimatedTime: "10 min",
        content: `### Refinando Consultas em SQL

Frequentemente necessitamos de condições complexas combinadas e de ordenação nos dados de saída.

#### Conectivos \`AND\` e \`OR\`

* **\`AND\`**: Todas as condições conectadas precisam ser verdadeiras.
* **\`OR\`**: Pelo menos uma das condições precisa ser verdadeira.

\`\`\`sql
-- Filtra produtos caros em estoque
SELECT nome, preco, estoque
FROM produtos
WHERE preco >= 200.00 AND estoque > 5;
\`\`\`

#### Cláusula \`ORDER BY\`

Determina a ordem dos registros retornados:
* **\`ASC\`**: Crescente (padrão).
* **\`DESC\`**: Decrescente.

\`\`\`sql
-- Lista funcionários do maior salário para o menor
SELECT nome, cargo, salario
FROM funcionarios
ORDER BY salario DESC;
\`\`\``,
        initialCode: `-- Escreva uma consulta para achar produtos da categoria 'Eletrônicos' com estoque baixo (menor que 10), ordenados pelo preço!
SELECT nome, estoque, preco
FROM produtos
WHERE categoria = 'Eletrônicos' AND estoque < 10
ORDER BY preco ASC;
`,
        codeLanguage: "sql"
      },
      {
        id: "sql-l3",
        title: "3. Funções de Agregação e GROUP BY",
        level: "avancado",
        estimatedTime: "13 min",
        content: `### Métricas e Agregações em SQL

SQL nos permite condensar milhares de linhas de tabelas em relatórios resumidos com funções matemáticas potentes.

#### Funções de Agregação Comuns

* **\`COUNT()\`**: Conta a quantidade de linhas.
* **\`SUM()\`**: Soma valores numéricos de uma coluna.
* **\`AVG()\`**: Calcula a média aritmética simples de uma coluna.
* **\`MAX()\` / \`MIN()\`**: Retornam o maior e o menor valor, respectivamente.

#### Agrupando Dados com \`GROUP BY\`

Agrupa linhas com valores idênticos em linhas de resumo. Geralmente, usamos em conjunto com funções de agregação:

\`\`\`sql
-- Calcula a quantidade de funcionários por departamento
SELECT departamento, COUNT(id) AS total_funcionarios
FROM funcionarios
GROUP BY departamento;
\`\`\``,
        initialCode: `-- Calcule a receita total de vendas e o ticket médio (média de valor) por tipo de pagamento!
SELECT 
    forma_pagamento, 
    SUM(valor) AS receita_total,
    AVG(valor) AS media_venda
FROM pagamentos
GROUP BY forma_pagamento;
`,
        codeLanguage: "sql"
      },
      {
        id: "sql-l4",
        title: "4. Multiplicando Dados com INNER JOIN e LEFT JOIN",
        level: "intermediario",
        estimatedTime: "12 min",
        content: `### Conectando Tabelas Relacionadas

Em um banco de dados relacional, as informações são distribuídas de forma inteligente em várias tabelas para evitar duplicações. Usamos a cláusula \`JOIN\` para reconectar esses registros.

#### INNER JOIN

Retorna apenas as linhas onde há correspondência em ambas as tabelas:

\`\`\`sql
SELECT clientes.nome, pedidos.id, pedidos.data_pedido
FROM clientes
INNER JOIN pedidos ON clientes.id = pedidos.cliente_id;
\`\`\`

#### LEFT JOIN

Retorna todos os registros da tabela da esquerda, mesmo que não haja correspondência na tabela da direita (neste caso, retorna \`NULL\` para as colunas da direita):

\`\`\`sql
SELECT clientes.nome, pedidos.id
FROM clientes
LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id;
-- Mostra todos os clientes, inclusive os que nunca fizeram nenhum pedido!
\`\`\``,
        initialCode: `-- Complete a consulta para trazer o nome do produto e o nome da categoria usando INNER JOIN!
SELECT produtos.nome AS produto, categorias.nome AS categoria
FROM produtos
-- 1. Insira a cláusula INNER JOIN com a correspondência correta
INNER JOIN categorias ON produtos.categoria_id = categorias.id;
`,
        codeLanguage: "sql"
      },
      {
        id: "sql-l5",
        title: "5. Subqueries (Subconsultas) e Filtros Complexos",
        level: "avancado",
        estimatedTime: "14 min",
        content: `### O que é uma Subquery?

Uma **subquery** (ou subconsulta) é simplesmente uma consulta SQL aninhada dentro de outra instrução de maior nível, servindo para retornar dados que serão usados na consulta externa como uma condição de filtro.

#### Exemplo de Subquery no WHERE

Imagine que você queira descobrir todos os produtos que possuem o preço acima da média geral:

\`\`\`sql
SELECT nome, preco
FROM produtos
WHERE preco > (SELECT AVG(preco) FROM produtos);
-- A subconsulta (SELECT AVG...) roda primeiro e retorna o valor médio, que alimenta o WHERE externo!
\`\`\`

#### O Operador IN com Subquery

\`\`\`sql
SELECT nome
FROM clientes
WHERE id IN (SELECT DISTINCT cliente_id FROM pedidos WHERE status = 'pago');
-- Retorna os clientes que possuem pelo menos um pedido pago!
\`\`\``,
        initialCode: `-- Escreva uma subconsulta para filtrar funcionários que ganham mais que a média de salários!
SELECT nome, cargo, salario
FROM funcionarios
WHERE salario > (SELECT AVG(salario) FROM funcionarios);
`,
        codeLanguage: "sql"
      },
      {
        id: "sql-l6",
        title: "6. Modificando Estruturas (DDL/DML) e Transações",
        level: "super_avancado",
        estimatedTime: "18 min",
        content: `### Gerenciamento de Banco e Transações de Dados

Nesta última lição de SQL, aprenderemos comandos para criar tabelas, alterar dados e garantir que nossas operações ocorram de forma totalmente segura usando transações (propriedades ACID).

#### DDL vs DML

* **DDL (Data Definition Language)**: Altera a estrutura do banco. Comandos: \`CREATE TABLE\`, \`ALTER TABLE\`, \`DROP TABLE\`.
* **DML (Data Manipulation Language)**: Modifica os registros em si. Comandos: \`INSERT\`, \`UPDATE\`, \`DELETE\`.

\`\`\`sql
-- Criando uma tabela (DDL)
CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    matriculado BOOLEAN DEFAULT TRUE
);

-- Modificando dados (DML)
INSERT INTO alunos (nome) VALUES ('Igor Costa');
UPDATE alunos SET matriculado = FALSE WHERE id = 1;
\`\`\`

#### Controle de Transações: COMMIT e ROLLBACK

Uma transação agrupa múltiplos comandos de modificação. Se todos derem certo, consolidamos com \`COMMIT\`. Se um deles falhar, cancelamos tudo com \`ROLLBACK\`, mantendo o banco intacto e consistente.

\`\`\`sql
BEGIN TRANSACTION;
UPDATE contas SET saldo = saldo - 100 WHERE id = 1;
UPDATE contas SET saldo = saldo + 100 WHERE id = 2;
-- Se tudo correr bem:
COMMIT;
-- Caso dê errado:
-- ROLLBACK;
\`\`\``,
        initialCode: `-- Crie uma instrução DML para atualizar o preço de todos os produtos eletrônicos em 10% de aumento!
UPDATE produtos
SET preco = preco * 1.10
WHERE categoria = 'Eletrônicos';
`,
        codeLanguage: "sql"
      }
    ],
    quizzes: [
      {
        id: "sql-q1",
        question: "Qual comando é utilizado para recuperar dados de uma tabela específica em SQL?",
        options: ["GET", "RETRIEVE", "SELECT", "FIND"],
        correctAnswerIndex: 2,
        explanation: "O 'SELECT' inicia qualquer instrução de consulta que objetive ler registros no banco de dados."
      },
      {
        id: "sql-q2",
        question: "Como listar resultados ordenados do maior valor para o menor?",
        options: ["ORDER BY valor ASC", "SORT BY valor BIGGEST", "ORDER BY valor DESC", "GROUP BY valor DOWN"],
        correctAnswerIndex: 2,
        explanation: "A palavra reservada DESC (descendente) no final da cláusula ORDER BY reverte a ordenação para de maior para menor."
      },
      {
        id: "sql-q3",
        question: "Qual tipo de JOIN retorna apenas os registros que possuem correspondência direta em ambas as tabelas envolvidas?",
        options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "OUTER JOIN"],
        correctAnswerIndex: 2,
        explanation: "O 'INNER JOIN' filtra a saída retornando apenas as linhas que cumprem rigorosamente a condição de junção ('ON') em ambas as tabelas."
      },
      {
        id: "sql-q4",
        question: "O que é uma Subquery em SQL?",
        options: [
          "Uma tabela temporária criada na memória RAM",
          "Uma consulta secundária aninhada dentro de outra instrução principal",
          "Uma ferramenta para exportar banco de dados em formato PDF",
          "Um método para descriptografar chaves primárias"
        ],
        correctAnswerIndex: 1,
        explanation: "Uma subquery é uma consulta interna (aninhada) usada para filtrar ou produzir valores dinâmicos para a instrução externa."
      },
      {
        id: "sql-q5",
        question: "Qual comando DML é responsável por alterar um ou mais registros existentes em uma tabela?",
        options: ["INSERT", "UPDATE", "CHANGE", "ALTER"],
        correctAnswerIndex: 1,
        explanation: "O comando 'UPDATE' modifica valores em colunas de linhas já cadastradas na tabela."
      },
      {
        id: "sql-q6",
        question: "Caso queira desfazer todas as alterações de uma transação aberta para manter a integridade original do banco de dados, qual comando executamos?",
        options: ["COMMIT", "CANCEL", "ROLLBACK", "RESET"],
        correctAnswerIndex: 2,
        explanation: "O comando 'ROLLBACK' cancela e desfaz qualquer instrução DML executada dentro de uma transação pendente desde o seu início ('BEGIN')."
      }
    ]
  },
  {
    id: "cpp",
    name: "C++",
    description: "Excelente para controle de baixo nível de memória, jogos tridimensionais de alto desempenho, sistemas operacionais e IoT.",
    iconName: "Terminal",
    color: "indigo",
    bgGradient: "from-indigo-400 to-purple-600",
    templates: [
      {
        name: "Olá, Mundo!",
        code: `#include <iostream>
#include <string>

int main() {
    std::string nome = "Estudante";
    std::cout << "Olá, Mundo!" << std::endl;
    std::cout << "Olá, estudante! Pronto para aprender?" << std::endl;
    return 0;
}
`,
        description: "Estrutura básica de um código em C++."
      }
    ],
    lessons: [
      {
        id: "cpp-l1",
        title: "1. Estrutura de um Programa C++ e Entrada/Saída",
        level: "iniciante",
        estimatedTime: "9 min",
        content: `### Introdução ao C++

C++ é uma das linguagens de programação compiladas mais rápidas do mundo, trazendo grande performance e acesso direto à memória do computador.

#### A Função \`main\`

Todo programa executável em C++ precisa ter uma função principal chamada \`main()\` que retorna um inteiro (normalmente \`0\` se tudo rodou com sucesso).

#### Entrada e Saída com \`<iostream>\`

* **\`std::cout\`**: Usado para exibir informações no console (saída).
* **\`std::cin\`**: Usado para receber dados inseridos pelo teclado (entrada).
* **\`std::endl\`**: Insere uma quebra de linha.

\`\`\`cpp
#include <iostream>

int main() {
    int numero = 10;
    std::cout << "O valor do número é: " << numero << std::endl;
    return 0;
}
\`\`\``,
        initialCode: `// Complete o código para exibir a idade inserida!
#include <iostream>

int main() {
    int idade = 20;
    
    std::cout << "Olá! Sua idade é: " << idade << " anos." << std::endl;
    
    return 0;
}
`,
        codeLanguage: "cpp"
      },
      {
        id: "cpp-l2",
        title: "2. Ponteiros e Gerenciamento de Memória",
        level: "intermediario",
        estimatedTime: "13 min",
        content: `### Entendendo Ponteiros em C++

Diferente de linguagens como JavaScript ou Python, C++ nos permite controlar diretamente onde as informações estão guardadas no hardware do computador.

#### O que é um Ponteiro?

Um ponteiro é simplesmente uma variável que armazena o **endereço de memória** de outra variável.

* **Operador de Endereço (\`&\`)**: Retorna a localização de memória de uma variável.
* **Operador de Desreferência (\`*\`)**: Permite acessar ou modificar o valor guardado no endereço apontado pelo ponteiro.

\`\`\`cpp
int numero = 42;
int* ponteiro = &numero; // Guarda o endereço de 'numero'

std::cout << ponteiro;  // Imprime o endereço (ex: 0x7ffeefbff56c)
std::cout << *ponteiro; // Imprime o valor guardado lá: 42

*ponteiro = 100; // Altera diretamente o valor de 'numero'!
std::cout << numero;    // Agora imprime 100!
\`\`\``,
        initialCode: `#include <iostream>

int main() {
    double preco = 19.99;
    double* ptrPreco = &preco;
    
    std::cout << "Preço atual: " << *ptrPreco << std::endl;
    
    // Altere o preço usando o ponteiro para testar!
    *ptrPreco = 24.99;
    
    std::cout << "Preço alterado: " << preco << std::endl;
    return 0;
}
`,
        codeLanguage: "cpp"
      },
      {
        id: "cpp-l3",
        title: "3. Orientação a Objetos: Classes e Objetos",
        level: "avancado",
        estimatedTime: "15 min",
        content: `### Classes e Objetos em C++

C++ suporta o paradigma de Orientação a Objetos (POO), que permite modelar elementos do mundo real em estruturas de código reaproveitáveis.

#### Definindo uma Classe

Uma classe é como uma fôrma que define as propriedades (**atributos**) e comportamentos (**métodos**) de um objeto.

\`\`\`cpp
#include <iostream>
#include <string>

class Pessoa {
public: // Modificador de acesso para permitir uso fora da classe
    std::string nome;
    int idade;

    void falar() {
        std::cout << "Olá! Meu nome é " << nome << "." << std::endl;
    }
};

int main() {
    Pessoa p1; // Instanciando objeto
    p1.nome = "Renata";
    p1.idade = 29;
    p1.falar(); // Executa o método
    return 0;
}
\`\`\``,
        initialCode: `#include <iostream>
#include <string>

class Aluno {
public:
    std::string nome;
    double nota;
    
    bool passou() {
        return nota >= 7.0;
    }
};

int main() {
    Aluno a;
    a.nome = "Lucas";
    a.nota = 8.5;
    
    std::cout << a.nome << " passou? " << (a.passou() ? "Sim" : "Não") << std::endl;
    return 0;
}
`,
        codeLanguage: "cpp"
      },
      {
        id: "cpp-l4",
        title: "4. Alocação Dinâmica de Memória (new, delete e Smart Pointers)",
        level: "intermediario",
        estimatedTime: "12 min",
        content: `### Gerenciando Memória na Heap

Em C++, variáveis locais são alocadas na **Stack** (Pilha) e limpas automaticamente. No entanto, para dados com tamanho dinâmico ou ciclo de vida customizado, alocamos memória na **Heap** usando \`new\` e limpamos com \`delete\`.

#### Alocação Manual Clássica

\`\`\`cpp
int* ptr = new int(10); // Aloca um inteiro na heap com valor 10
std::cout << *ptr << std::endl;

delete ptr; // CRÍTICO: Libera a memória para evitar Memory Leak!
ptr = nullptr; // Boa prática: evita ponteiros soltos
\`\`\`

#### Smart Pointers (Ponteiros Inteligentes)

O C++ moderno (C++11+) introduziu ponteiros que gerenciam a própria memória automaticamente, eliminando a necessidade do \`delete\` manual.

* **\`std::unique_ptr\`**: Representa posse exclusiva de uma região de memória. Limpa-se automaticamente ao sair do escopo.

\`\`\`cpp
#include <memory>

void func() {
    std::unique_ptr<int> inteligente = std::make_unique<int>(20);
    std::cout << *inteligente << std::endl; 
    // Memória liberada automaticamente aqui ao fechar a chave!
}
\`\`\``,
        initialCode: `// Pratique a alocação de um vetor dinâmico e sua devida limpeza!
#include <iostream>

int main() {
    // 1. Aloque um vetor dinâmico de 5 inteiros usando 'new'
    int* vetor = new int[5]{10, 20, 30, 40, 50};
    
    std::cout << "Terceiro item: " << vetor[2] << std::endl; // Esperado: 30
    
    // 2. Libere a memória do vetor usando 'delete[]'
    delete[] vetor;
    
    return 0;
}
`,
        codeLanguage: "cpp"
      },
      {
        id: "cpp-l5",
        title: "5. POO Avançado: Herança, Métodos Virtuais e Polimorfismo",
        level: "avancado",
        estimatedTime: "15 min",
        content: `### Reuso e Polimorfismo em C++

Com herança, classes filhas herdam características das classes mães. Com **Polimorfismo**, podemos tratar diferentes classes filhas de forma genérica pela interface comum do pai.

#### Métodos Virtuais

Para que o polimorfismo dinâmico funcione, a classe pai precisa marcar seus métodos com a palavra-chave \`virtual\`. Isso diz ao compilador para decidir qual método executar em tempo de execução, e não de compilação.

\`\`\`cpp
#include <iostream>

class Animal {
public:
    virtual void fazerSom() {
        std::cout << "Som de animal!" << std::endl;
    }
};

class Gato : public Animal {
public:
    void fazerSom() override { // indica que está substituindo o método do pai
        std::cout << "Miau!" << std::endl;
    }
};
\`\`\`

#### Executando Polimorfismo com Ponteiros do Pai

\`\`\`cpp
Animal* pet = new Gato();
pet->fazerSom(); // Executa "Miau!", pois o método era virtual no pai!
delete pet;
\`\`\``,
        initialCode: `// Complete as classes Conta e ContaPoupanca para implementar polimorfismo!
#include <iostream>

class Conta {
public:
    virtual void render() {
        std::cout << "Rendimento padrão." << std::endl;
    }
};

class ContaPoupanca : public Conta {
public:
    void render() override {
        std::cout << "Rendimento da poupança de 5% aplicado!" << std::endl;
    }
};

int main() {
    Conta* c = new ContaPoupanca();
    c->render(); // Esperado: Rendimento da poupança de 5% aplicado!
    delete c;
    return 0;
}
`,
        codeLanguage: "cpp"
      },
      {
        id: "cpp-l6",
        title: "6. STL (Standard Template Library) e Programação Genérica",
        level: "super_avancado",
        estimatedTime: "20 min",
        content: `### O Poder do C++ Moderno: STL e Templates

A **Standard Template Library (STL)** é uma coleção fabulosa de contêineres de dados, algoritmos e iteradores altamente otimizados e prontos para uso.

#### Contêineres Comuns: vector, map e list

* **\`std::vector\`**: Array dinâmico que cresce automaticamente conforme necessário.
* **\`std::map\`**: Dicionário de chave/valor altamente otimizado por árvores rubro-negras.

\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> nums = {5, 2, 8, 1};
    nums.push_back(10); // Adiciona 10 ao final
    
    // Ordena o vetor usando algoritmo da STL
    std::sort(nums.begin(), nums.end());
    
    for (int n : nums) {
        std::cout << n << " "; // Saída ordenada: 1 2 5 8 10
    }
    return 0;
}
\`\`\`

#### Templates (Modelos Genéricos)

Permitem escrever funções ou classes que funcionam com qualquer tipo de dado sem duplicar código:

\`\`\`cpp
template <typename T>
T maior(T a, T b) {
    return (a > b) ? a : b;
}

std::cout << maior<int>(5, 10);     // Funciona com inteiros
std::cout << maior<double>(3.5, 1.2); // Funciona com doubles
\`\`\``,
        initialCode: `// Use std::vector e adicione valores dinamicamente!
#include <iostream>
#include <vector>
#include <numeric> // Para std::accumulate

int main() {
    // 1. Instancie um vetor de inteiros vazio
    std::vector<int> notas;
    
    // 2. Adicione os valores 10, 8 e 9 usando push_back
    notas.push_back(10);
    notas.push_back(8);
    notas.push_back(9);
    
    // Calcula o somatório
    int soma = std::accumulate(notas.begin(), notas.end(), 0);
    std::cout << "Soma das Notas: " << soma << std::endl; // Esperado: 27
    
    return 0;
}
`,
        codeLanguage: "cpp"
      }
    ],
    quizzes: [
      {
        id: "cpp-q1",
        question: "Qual o ponto de entrada obrigatório de execução para qualquer aplicativo compilável em C++?",
        options: ["void run()", "int main()", "class Application", "#include <main>"],
        correctAnswerIndex: 1,
        explanation: "A função 'int main()' é identificada pelo compilador C++ como o início da pilha de chamadas e execução."
      },
      {
        id: "cpp-q2",
        question: "Se temos 'int x = 10; int* p = &x;', o que a expressão '*p' representa?",
        options: [
          "O endereço de memória da variável x",
          "O valor atual da variável x (10)",
          "A criação de uma nova variável int",
          "Uma operação de multiplicação por p"
        ],
        correctAnswerIndex: 1,
        explanation: "O operador de desreferenciação '*' na frente do ponteiro extrai o valor real armazenado na célula de memória apontada."
      },
      {
        id: "cpp-q3",
        question: "Qual operador em C++ é utilizado para liberar memória alocada dinamicamente na heap com o operador 'new'?",
        options: ["free", "delete", "clear", "release"],
        correctAnswerIndex: 1,
        explanation: "O operador 'delete' libera os blocos de memória previamente requisitados dinamicamente na heap do sistema."
      },
      {
        id: "cpp-q4",
        question: "Para que serve a palavra-chave 'virtual' colocada na frente de um método na classe pai?",
        options: [
          "Indica que o método não existe fisicamente na RAM",
          "Permite que o método seja sobrescrito pelas classes filhas para fins de polimorfismo",
          "Protege o método contra qualquer tipo de modificação externa",
          "Acelera a compilação do código de herança múltipla"
        ],
        correctAnswerIndex: 1,
        explanation: "A instrução 'virtual' habilita o polimorfismo dinâmico (dynamic dispatch) em tempo de execução."
      },
      {
        id: "cpp-q5",
        question: "Qual classe contêiner de dados da Standard Template Library (STL) representa um array dinâmico redimensionável automaticamente?",
        options: ["std::array", "std::list", "std::vector", "std::map"],
        correctAnswerIndex: 2,
        explanation: "O 'std::vector' representa um array contíguo redimensionável de alta performance e uso generalista."
      },
      {
        id: "cpp-q6",
        question: "O que define o recurso de 'Templates' em C++?",
        options: [
          "Modelos visuais pré-construídos para estilizar jogos em OpenGL",
          "Mecanismo de programação genérica permitindo criar classes e funções independentes de tipo de dado",
          "Documentos de ajuda ao desenvolvedor inclusos nas diretivas de pré-processador",
          "Conjunto de regras de segurança que impede estouro de buffer"
        ],
        correctAnswerIndex: 1,
        explanation: "Templates permitem definir lógicas genéricas de código onde o tipo de dado em si é parametrizado."
      }
    ]
  }
];

export const libraryLanguages: LibraryLanguage[] = [
  { id: "csharp", name: "C# (C-Sharp)", description: "Linguagem robusta e moderna da Microsoft baseada em Orientação a Objetos, amplamente utilizada no desenvolvimento enterprise com .NET e na criação de jogos 3D/2D com Unity.", category: "backend", iconName: "Cpu", color: "purple", bgGradient: "from-purple-600 to-indigo-800" },
  { id: "c", name: "C", description: "A mãe de quase todas as linguagens modernas. Criada na década de 1970 para escrever o UNIX, é a principal linguagem de sistemas do mundo pela sua velocidade insuperável e controle de memória.", category: "sistemas", iconName: "Cpu", color: "blue", bgGradient: "from-blue-600 to-indigo-800" },
  { id: "rust", name: "Rust", description: "Linguagem de sistemas focada em segurança de memória, velocidade e concorrência sem coletor de lixo.", category: "sistemas", iconName: "Cpu", color: "orange", bgGradient: "from-orange-500 to-amber-700" },
  { id: "go", name: "Go (Golang)", description: "Criada pelo Google para simplificar sistemas concorrentes robustos e APIs ultra rápidas.", category: "backend", iconName: "Server", color: "cyan", bgGradient: "from-cyan-400 to-blue-500" },
  { id: "ruby", name: "Ruby", description: "Famosa pela produtividade e felicidade do programador com o framework Ruby on Rails.", category: "backend", iconName: "Gem", color: "rose", bgGradient: "from-rose-500 to-red-700" },
  { id: "swift", name: "Swift", description: "Linguagem moderna e rápida da Apple para criar aplicativos nativos para iOS, macOS e iPadOS.", category: "mobile", iconName: "Smartphone", color: "orange", bgGradient: "from-orange-400 to-rose-500" },
  { id: "kotlin", name: "Kotlin", description: "Linguagem oficial recomendada pelo Google para o desenvolvimento de apps Android modernos.", category: "mobile", iconName: "Smartphone", color: "indigo", bgGradient: "from-purple-500 to-indigo-600" },
  { id: "java", name: "Java", description: "Pilar corporativo global multi-dispositivo usado em grandes empresas e APIs robustas de backend.", category: "backend", iconName: "Server", color: "red", bgGradient: "from-red-500 to-orange-600" },
  { id: "php", name: "PHP", description: "A linguagem que dá vida a mais de 75% da web dinâmica, impulsionando WordPress e Laravel.", category: "backend", iconName: "Globe", color: "indigo", bgGradient: "from-indigo-400 to-blue-600" },
  { id: "typescript", name: "TypeScript", description: "Um superconjunto de JavaScript que adiciona tipos estáticos opcionais, escalando aplicações complexas.", category: "frontend", iconName: "FileCode", color: "blue", bgGradient: "from-blue-500 to-sky-600" },
  { id: "r", name: "R", description: "Ambiente e linguagem ideal para computação estatística, análise de dados de alta precisão e gráficos.", category: "dados", iconName: "LineChart", color: "blue", bgGradient: "from-blue-400 to-indigo-500" },
  { id: "scala", name: "Scala", description: "Combina programação funcional e orientada a objetos na JVM, famosa por processamento massivo Spark.", category: "funcional", iconName: "Zap", color: "red", bgGradient: "from-red-600 to-pink-700" },
  { id: "haskell", name: "Haskell", description: "Linguagem puramente funcional avançada com tipagem forte estática e avaliação preguiçosa.", category: "funcional", iconName: "Workflow", color: "purple", bgGradient: "from-purple-600 to-violet-800" },
  { id: "clojure", name: "Clojure", description: "Um dialeto Lisp moderno e elegante focado em concorrência e dados imutáveis rodando na JVM.", category: "funcional", iconName: "Workflow", color: "green", bgGradient: "from-emerald-500 to-green-700" },
  { id: "elixir", name: "Elixir", description: "Roda na máquina virtual do Erlang (BEAM) para construir aplicações distribuídas de alta concorrência.", category: "funcional", iconName: "Zap", color: "purple", bgGradient: "from-purple-500 to-indigo-700" },
  { id: "erlang", name: "Erlang", description: "Desenvolvida pela Ericsson para sistemas telefônicos distribuídos com tolerância a falhas massiva.", category: "funcional", iconName: "Server", color: "red", bgGradient: "from-red-600 to-rose-800" },
  { id: "lisp", name: "Common Lisp", description: "Uma das linguagens mais antigas e flexíveis do mundo, pioneira em inteligência artificial e macros.", category: "funcional", iconName: "HelpCircle", color: "yellow", bgGradient: "from-amber-400 to-yellow-600" },
  { id: "cobol", name: "COBOL", description: "Criada em 1959, ainda processa trilhões de dólares diariamente em sistemas bancários legados mundiais.", category: "historica", iconName: "Archive", color: "zinc", bgGradient: "from-zinc-500 to-neutral-700" },
  { id: "fortran", name: "Fortran", description: "A primeira linguagem comercial de alto nível, lendária para cálculos científicos e supercomputação.", category: "historica", iconName: "Archive", color: "blue", bgGradient: "from-blue-600 to-cyan-800" },
  { id: "perl", name: "Perl", description: "A ferramenta canivete-suíço para processamento de textos pesados, relatórios e scripts de sistemas Unix.", category: "historica", iconName: "FileCode", color: "cyan", bgGradient: "from-cyan-500 to-teal-700" },
  { id: "lua", name: "Lua", description: "Linguagem brasileira super leve projetada para ser embebida em outros programas e jogos (como Roblox).", category: "sistemas", iconName: "Gamepad2", color: "blue", bgGradient: "from-blue-600 to-indigo-800" },
  { id: "julia", name: "Julia", description: "Projetada para computação científica de alto desempenho com a velocidade de C e a facilidade de Python.", category: "dados", iconName: "Binary", color: "emerald", bgGradient: "from-green-500 to-emerald-700" },
  { id: "dart", name: "Dart", description: "Desenvolvida pelo Google, otimizada para interfaces do usuário e usada com o framework cross-platform Flutter.", category: "mobile", iconName: "Smartphone", color: "cyan", bgGradient: "from-cyan-500 to-teal-600" },
  { id: "solidity", name: "Solidity", description: "A linguagem dominante para escrever contratos inteligentes seguros e aplicações dApps na rede Ethereum.", category: "web3", iconName: "Shield", color: "purple", bgGradient: "from-purple-600 to-indigo-800" },
  { id: "prolog", name: "Prolog", description: "Linguagem baseada em lógica matemática ideal para inteligência artificial clássica e bancos de fatos.", category: "historica", iconName: "HelpCircle", color: "emerald", bgGradient: "from-emerald-600 to-teal-800" },
  { id: "assembly", name: "Assembly x86/ARM", description: "Representação direta e crua em nível de instrução de hardware que o processador do seu computador executa.", category: "sistemas", iconName: "Cpu", color: "zinc", bgGradient: "from-zinc-600 to-slate-800" },
  { id: "scratch", name: "Scratch", description: "Linguagem visual baseada em blocos para ensinar lógica de programação para crianças e iniciantes de forma lúdica.", category: "frontend", iconName: "Gamepad2", color: "orange", bgGradient: "from-orange-400 to-amber-500" },
  { id: "pascal", name: "Pascal", description: "Projetada para ensinar programação estruturada disciplinada na academia de forma limpa e compreensível.", category: "historica", iconName: "Archive", color: "indigo", bgGradient: "from-indigo-500 to-blue-700" },
  { id: "delphi", name: "Delphi (Object Pascal)", description: "Super poderosa para desenvolvimento rápido de sistemas desktop corporativos com interfaces gráficas ricas.", category: "historica", iconName: "Laptop", color: "red", bgGradient: "from-red-500 to-rose-700" },
  { id: "crystal", name: "Crystal", description: "Sintaxe super amigável inspirada em Ruby com a incrível velocidade de execução de C++ compilado por LLVM.", category: "backend", iconName: "Gem", color: "cyan", bgGradient: "from-sky-400 to-cyan-600" },
  { id: "zig", name: "Zig", description: "Uma alternativa moderna a C focada em robustez, legibilidade, simplicidade extrema e tempo de compilação rápido.", category: "sistemas", iconName: "Cpu", color: "yellow", bgGradient: "from-yellow-500 to-amber-600" },
  { id: "nim", name: "Nim", description: "Linguagem elegante que se compila para C/C++ obtendo velocidade nativa insuperável com sintaxe estilo Python.", category: "sistemas", iconName: "FileCode", color: "yellow", bgGradient: "from-yellow-400 to-orange-500" },
  { id: "elm", name: "Elm", description: "Linguagem puramente funcional para web que garante zero exceções de runtime no navegador do usuário final.", category: "frontend", iconName: "Globe", color: "emerald", bgGradient: "from-emerald-400 to-teal-600" },
  { id: "solr", name: "Apache Solr Query", description: "Linguagem de indexação e buscas corporativas de texto completo rápidas com alto nível de escalabilidade.", category: "dados", iconName: "Search", color: "orange", bgGradient: "from-orange-500 to-amber-600" },
  { id: "shell", name: "Bash/Shell Script", description: "A linguagem nativa de automação de terminais Linux e orquestração de servidores em nuvem e DevOps.", category: "sistemas", iconName: "Terminal", color: "zinc", bgGradient: "from-zinc-700 to-neutral-900" },
  { id: "powershell", name: "PowerShell", description: "A poderosa ferramenta de automação orientada a objetos da Microsoft para gerenciamento do Windows.", category: "sistemas", iconName: "Terminal", color: "blue", bgGradient: "from-blue-600 to-sky-700" },
  { id: "apex", name: "Apex", description: "Linguagem orientada a objetos com sintaxe similar ao Java executada nos servidores Salesforce em nuvem.", category: "backend", iconName: "Cloud", color: "sky", bgGradient: "from-sky-500 to-blue-600" },
  { id: "abap", name: "ABAP", description: "Linguagem proprietária da gigante alemã SAP desenvolvida exclusivamente para customização de ERP.", category: "backend", iconName: "Building2", color: "blue", bgGradient: "from-blue-700 to-slate-900" },
  { id: "fsharp", name: "F#", description: "Linguagem de programação funcional de primeira classe suportada de forma oficial na plataforma .NET da Microsoft.", category: "funcional", iconName: "Workflow", color: "cyan", bgGradient: "from-cyan-600 to-blue-700" },
  { id: "groovy", name: "Apache Groovy", description: "Linguagem dinâmica estendendo recursos do Java que facilita muito scripts de integração e builds Gradle.", category: "backend", iconName: "Zap", color: "teal", bgGradient: "from-teal-500 to-emerald-700" },
  { id: "vbnet", name: "Visual Basic .NET", description: "Linguagem histórica orientada a objetos idealizada pela Microsoft para facilidade e desenvolvimento visual rápido.", category: "historica", iconName: "Laptop", color: "purple", bgGradient: "from-purple-500 to-indigo-700" },
  { id: "objectivec", name: "Objective-C", description: "O predecessor do Swift. Linguagem baseada em mensagens para o desenvolvimento inicial de apps iOS.", category: "historica", iconName: "Archive", color: "zinc", bgGradient: "from-zinc-600 to-neutral-700" },
  { id: "plsql", name: "PL/SQL (Oracle)", description: "Extensão procedural do SQL projetada de forma nativa para controle granular do banco de dados Oracle Database.", category: "dados", iconName: "Database", color: "red", bgGradient: "from-red-600 to-rose-800" },
  { id: "sas", name: "SAS", description: "Linguagem dominante para análise avançada de dados corporativos, biometria e inteligência de negócios.", category: "dados", iconName: "LineChart", color: "blue", bgGradient: "from-blue-600 to-cyan-700" },
  { id: "scheme", name: "Scheme", description: "Um dos dialetos lisp mais puros e minimalistas, muito utilizado para fins de ensino acadêmico e pesquisa.", category: "funcional", iconName: "HelpCircle", color: "indigo", bgGradient: "from-indigo-600 to-violet-800" },
  { id: "ocaml", name: "OCaml", description: "Linguagem funcional pragmática e industrial com alta performance de compilação, tipos fortes e segurança.", category: "funcional", iconName: "Workflow", color: "orange", bgGradient: "from-orange-500 to-red-600" },
  { id: "standardml", name: "Standard ML", description: "Dialeto clássico do ML usado principalmente por matemáticos e provas computacionais de teoremas.", category: "funcional", iconName: "Binary", color: "purple", bgGradient: "from-purple-600 to-rose-700" },
  { id: "smalltalk", name: "Smalltalk", description: "O pioneiro absoluto da Orientação a Objetos que introduziu interfaces visuais, janelas e herança limpa.", category: "historica", iconName: "HelpCircle", color: "yellow", bgGradient: "from-amber-500 to-yellow-600" },
  { id: "brainfuck", name: "Brainfuck", description: "Linguagem esotérica minimalista de extrema dificuldade contendo apenas 8 comandos para programadores audaciosos.", category: "historica", iconName: "Flame", color: "red", bgGradient: "from-red-600 to-orange-700" },
  { id: "vhdl", name: "VHDL", description: "Linguagem de descrição de hardware usada para projetar chips de computador e circuitos FPGA físicos.", category: "sistemas", iconName: "Cpu", color: "zinc", bgGradient: "from-zinc-500 to-neutral-600" },
  { id: "verilog", name: "Verilog", description: "A segunda principal linguagem de descrição de hardware usada para modelar sistemas digitais integrados.", category: "sistemas", iconName: "Cpu", color: "zinc", bgGradient: "from-neutral-600 to-slate-800" },
  { id: "awk", name: "AWK", description: "Poderosa utilidade Unix projetada especificamente para processar e formatar relatórios a partir de arquivos de texto.", category: "dados", iconName: "FileCode", color: "teal", bgGradient: "from-teal-600 to-emerald-800" },
  { id: "sed", name: "SED", description: "Editor de fluxo não-interativo clássico do Linux para filtrar, substituir e manipular textos no terminal.", category: "sistemas", iconName: "Terminal", color: "zinc", bgGradient: "from-zinc-600 to-stone-800" },
  { id: "solr_schema", name: "Solr Schema Configuration", description: "Linguagem de marcação para configurar esquemas de busca e dicionários semânticos no ecossistema Lucene.", category: "dados", iconName: "Database", color: "orange", bgGradient: "from-orange-600 to-amber-700" }
];

export type DifficultyLevel = "iniciante" | "intermediario" | "avancado";

export interface Lesson {
  id: string;
  title: string;
  level: DifficultyLevel;
  estimatedTime: string;
  content: string; // Markdown supported
  initialCode?: string;
  codeLanguage?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface PlaygroundTemplate {
  name: string;
  code: string;
  description: string;
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
  color: string; // Tailwind colors e.g. "yellow", "blue"
  bgGradient: string; // Tailwind bg-gradient string
  lessons: Lesson[];
  quizzes: QuizQuestion[];
  templates: PlaygroundTemplate[];
}

export interface LibraryLanguage {
  id: string;
  name: string;
  description: string;
  category: "backend" | "frontend" | "mobile" | "sistemas" | "dados" | "funcional" | "historica" | "web3";
  iconName: string;
  color: string;
  bgGradient: string;
}

export interface SavedSnippet {
  id: string;
  title: string;
  code: string;
  languageId: string;
  savedAt: string;
}

export interface Challenge {
  title: string;
  description: string;
  starterCode: string;
  solutionTemplate: string;
  testCases: Array<{
    input: string;
    expectedOutput: string;
  }>;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
}

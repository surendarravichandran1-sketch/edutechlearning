export interface User {
  id: string;
  name: string;
  email: string;
  experienceLevel: 'fresher' | 'associate' | 'analyst' | 'professional';
  enrolledCourses: string[];
  courseProgress: Record<string, CourseProgress>;
  certificates: Certificate[];
}

export interface CourseProgress {
  courseId: string;
  completedModules: string[];
  currentModuleIndex: number;
  overallProgress: number;
  quizScores: Record<string, number>;
  lastAccessedAt: string;
}

export interface Certificate {
  id: string;
  courseId: string;
  courseName: string;
  userName: string;
  completedAt: string;
  founderName: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  modules: Module[];
  estimatedHours: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  content: ModuleContent[];
  videoUrl?: string;
  quiz: Quiz;
  estimatedMinutes: number;
}

export interface ModuleContent {
  type: 'heading' | 'paragraph' | 'list' | 'definition' | 'example';
  content: string;
  items?: string[];
}

export interface Quiz {
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

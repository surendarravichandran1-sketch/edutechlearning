import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, CourseProgress, Certificate } from '@/types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (name: string, email: string, experienceLevel: User['experienceLevel']) => void;
  logout: () => void;
  updateCourseProgress: (courseId: string, progress: CourseProgress) => void;
  enrollInCourse: (courseId: string) => void;
  addCertificate: (certificate: Certificate) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('edutech_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (name: string, email: string, experienceLevel: User['experienceLevel']) => {
    const newUser: User = {
      id: crypto.randomUUID(),
      name,
      email,
      experienceLevel,
      enrolledCourses: [],
      courseProgress: {},
      certificates: [],
    };
    setUser(newUser);
    localStorage.setItem('edutech_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('edutech_user');
  };

  const updateCourseProgress = (courseId: string, progress: CourseProgress) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      courseProgress: {
        ...user.courseProgress,
        [courseId]: progress,
      },
    };
    setUser(updatedUser);
    localStorage.setItem('edutech_user', JSON.stringify(updatedUser));
  };

  const enrollInCourse = (courseId: string) => {
    if (!user || user.enrolledCourses.includes(courseId)) return;
    const updatedUser = {
      ...user,
      enrolledCourses: [...user.enrolledCourses, courseId],
      courseProgress: {
        ...user.courseProgress,
        [courseId]: {
          courseId,
          completedModules: [],
          currentModuleIndex: 0,
          overallProgress: 0,
          quizScores: {},
          lastAccessedAt: new Date().toISOString(),
        },
      },
    };
    setUser(updatedUser);
    localStorage.setItem('edutech_user', JSON.stringify(updatedUser));
  };

  const addCertificate = (certificate: Certificate) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      certificates: [...user.certificates, certificate],
    };
    setUser(updatedUser);
    localStorage.setItem('edutech_user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        updateCourseProgress,
        enrollInCourse,
        addCertificate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, CheckCircle, ArrowRight, FileText } from 'lucide-react';
import { courses } from '@/data/courses';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
import { Quiz } from '@/components/Quiz';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

type ViewState = 'content' | 'quiz' | 'complete';

export default function ModuleView() {
  const { courseId, moduleIndex } = useParams<{ courseId: string; moduleIndex: string }>();
  const navigate = useNavigate();
  const { user, updateCourseProgress, addCertificate } = useAuth();
  const [viewState, setViewState] = useState<ViewState>('content');

  const course = courses.find((c) => c.id === courseId);
  const modIndex = parseInt(moduleIndex || '0');
  const module = course?.modules[modIndex];

  if (!course || !module) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Module not found</p>
      </div>
    );
  }

  const progress = user?.courseProgress[course.id];
  const isModuleCompleted = progress?.completedModules.includes(module.id);

  const handleStartQuiz = () => {
    setViewState('quiz');
  };

  const handleQuizComplete = (score: number, passed: boolean) => {
    if (passed && user && progress) {
      const newCompletedModules = [...progress.completedModules, module.id];
      const newProgress = Math.round((newCompletedModules.length / course.modules.length) * 100);
      
      const updatedProgress = {
        ...progress,
        completedModules: newCompletedModules,
        currentModuleIndex: Math.min(modIndex + 1, course.modules.length - 1),
        overallProgress: newProgress,
        quizScores: { ...progress.quizScores, [module.id]: score },
        lastAccessedAt: new Date().toISOString(),
      };

      updateCourseProgress(course.id, updatedProgress);

      // Check if course is complete
      if (newProgress === 100) {
        const certificate = {
          id: crypto.randomUUID(),
          courseId: course.id,
          courseName: course.title,
          userName: user.name,
          completedAt: new Date().toISOString(),
          founderName: 'Surendar',
        };
        addCertificate(certificate);
        toast.success('Congratulations! You earned a certificate!');
      }

      setViewState('complete');
    }
  };

  const handleNextModule = () => {
    if (modIndex < course.modules.length - 1) {
      navigate(`/course/${course.id}/module/${modIndex + 1}`);
      setViewState('content');
    } else {
      navigate(`/course/${course.id}`);
    }
  };

  const renderContent = () => {
    return module.content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          return (
            <motion.h3
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-lg font-bold text-foreground mt-6 mb-3"
            >
              {item.content}
            </motion.h3>
          );
        case 'paragraph':
          return (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-muted-foreground leading-relaxed mb-4"
            >
              {item.content}
            </motion.p>
          );
        case 'list':
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <p className="font-medium text-foreground mb-2">{item.content}</p>
              <ul className="space-y-2">
                {item.items?.map((listItem, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{listItem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        case 'definition':
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4 p-4 rounded-xl bg-primary/10 border border-primary/20"
            >
              <p className="text-foreground">{item.content}</p>
            </motion.div>
          );
        case 'example':
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4 p-4 rounded-xl bg-accent/10 border border-accent/20"
            >
              <p className="text-foreground">{item.content}</p>
            </motion.div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-background pb-8 pt-16">
      <Header title={module.title} showBack />

      <div className="px-4 py-6 max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {viewState === 'content' && (
            <motion.div
              key="content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              {/* Module header */}
              <div className="glass-card rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-primary">
                    <FileText className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Module {modIndex + 1} of {course.modules.length}
                    </p>
                    <h2 className="font-semibold text-foreground">{module.title}</h2>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </div>

              {/* Video placeholder */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted/50 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center cursor-pointer glow-button"
                  >
                    <Play className="h-6 w-6 text-primary-foreground ml-1" />
                  </motion.div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-foreground glass-card px-3 py-2 rounded-lg inline-block">
                    📹 Video content for this module
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="glass-card rounded-2xl p-5">
                {renderContent()}
              </div>

              {/* Action button */}
              <div className="pt-4">
                {isModuleCompleted ? (
                  <Button onClick={handleNextModule} className="w-full" variant="success">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {modIndex < course.modules.length - 1 ? 'Next Module' : 'Back to Course'}
                  </Button>
                ) : (
                  <Button onClick={handleStartQuiz} className="w-full">
                    Take Quiz
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                )}
              </div>
            </motion.div>
          )}

          {viewState === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass-card rounded-2xl p-5"
            >
              <h3 className="text-lg font-bold text-foreground mb-6">Module Quiz</h3>
              <Quiz quiz={module.quiz} onComplete={handleQuizComplete} />
            </motion.div>
          )}

          {viewState === 'complete' && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-success mb-6"
              >
                <CheckCircle className="h-10 w-10 text-success-foreground" />
              </motion.div>

              <h3 className="text-2xl font-bold text-foreground mb-2">Module Complete!</h3>
              <p className="text-muted-foreground mb-8">
                {modIndex < course.modules.length - 1
                  ? 'Great job! Ready for the next module?'
                  : 'Congratulations! You\'ve completed the course!'}
              </p>

              <Button onClick={handleNextModule} size="lg">
                {modIndex < course.modules.length - 1 ? (
                  <>
                    Next Module
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </>
                ) : (
                  <>
                    View Certificate
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

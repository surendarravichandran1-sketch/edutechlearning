import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, BookOpen, Award, Play } from 'lucide-react';
import { courses } from '@/data/courses';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
import { ModuleCard } from '@/components/ModuleCard';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { user, enrollInCourse } = useAuth();

  const course = courses.find((c) => c.id === courseId);
  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Course not found</p>
      </div>
    );
  }

  const isEnrolled = user?.enrolledCourses.includes(course.id);
  const progress = user?.courseProgress[course.id];
  const completedModules = progress?.completedModules || [];
  const currentModuleIndex = progress?.currentModuleIndex || 0;
  const overallProgress = progress?.overallProgress || 0;

  const handleEnroll = () => {
    enrollInCourse(course.id);
  };

  const handleModuleClick = (moduleIndex: number) => {
    navigate(`/course/${course.id}/module/${moduleIndex}`);
  };

  return (
    <div className="min-h-screen bg-background pb-8 pt-16">
      <Header title={course.title} showBack />

      <div className="px-4 py-6 max-w-lg mx-auto space-y-6">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br ${course.color}`}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            {course.icon}
          </motion.div>
          <h1 className="text-2xl font-bold text-primary-foreground mb-2">{course.title}</h1>
          <p className="text-primary-foreground/80 text-sm">{course.shortDescription}</p>

          <div className="flex items-center gap-4 mt-4 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.estimatedHours} hours</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{course.modules.length} modules</span>
            </div>
          </div>
        </motion.div>

        {/* Progress or enroll */}
        {isEnrolled ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">Course Progress</span>
              <span className="text-sm font-bold text-primary">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
            {overallProgress === 100 && (
              <div className="flex items-center gap-2 mt-3 text-success">
                <Award className="h-4 w-4" />
                <span className="text-sm font-medium">Certificate Earned!</span>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Button onClick={handleEnroll} size="lg" className="w-full">
              <Play className="h-5 w-5 mr-2" />
              Start Learning
            </Button>
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-4"
        >
          <h3 className="font-semibold text-foreground mb-2">About this course</h3>
          <p className="text-sm text-muted-foreground">{course.description}</p>
        </motion.div>

        {/* Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-semibold text-foreground mb-4">
            Course Modules ({course.modules.length})
          </h3>
          <div className="space-y-3">
            {course.modules.map((module, index) => {
              const isCompleted = completedModules.includes(module.id);
              const isLocked = !isEnrolled || (index > 0 && !completedModules.includes(course.modules[index - 1].id));
              const isCurrent = isEnrolled && !isCompleted && index === currentModuleIndex;

              return (
                <ModuleCard
                  key={module.id}
                  module={module}
                  index={index}
                  isCompleted={isCompleted}
                  isLocked={isLocked}
                  isCurrent={isCurrent}
                  onClick={() => handleModuleClick(index)}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

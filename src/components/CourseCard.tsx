import { motion } from 'framer-motion';
import { Play, CheckCircle, Lock } from 'lucide-react';
import { Course } from '@/types';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface CourseCardProps {
  course: Course;
  index: number;
  onClick: () => void;
}

export function CourseCard({ course, index, onClick }: CourseCardProps) {
  const { user } = useAuth();
  const isEnrolled = user?.enrolledCourses.includes(course.id);
  const progress = user?.courseProgress[course.id]?.overallProgress || 0;
  const isCompleted = progress === 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl cursor-pointer card-shadow"
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20`} />
      
      {/* Glass overlay */}
      <div className="relative glass-card p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`text-4xl p-3 rounded-2xl bg-gradient-to-br ${course.color} shadow-lg`}>
              {course.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-foreground leading-tight">
                {course.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {course.estimatedHours} hours • {course.modules.length} modules
              </p>
            </div>
          </div>
          {isCompleted && (
            <CheckCircle className="h-6 w-6 text-success" />
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        {isEnrolled ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold text-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <Button
              variant={isCompleted ? 'success' : 'default'}
              size="sm"
              className="w-full"
            >
              {isCompleted ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Completed
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" />
                  Continue Learning
                </>
              )}
            </Button>
          </div>
        ) : (
          <Button variant="accent" size="sm" className="w-full">
            Start Learning
          </Button>
        )}
      </div>
    </motion.div>
  );
}

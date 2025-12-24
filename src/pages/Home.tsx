import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, TrendingUp, BookOpen, Award, ChevronRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { courses } from '@/data/courses';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { CourseCard } from '@/components/CourseCard';
import { ProgressCircle } from '@/components/ProgressCircle';
import { Button } from '@/components/ui/button';

export default function Home() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const enrolledCourses = courses.filter((c) => user?.enrolledCourses.includes(c.id));
  const featuredCourses = courses.slice(0, 3);
  
  const totalProgress = enrolledCourses.length > 0
    ? Math.round(
        enrolledCourses.reduce(
          (acc, course) => acc + (user?.courseProgress[course.id]?.overallProgress || 0),
          0
        ) / enrolledCourses.length
      )
    : 0;

  return (
    <div className="min-h-screen bg-background pb-24 pt-16">
      <Header />

      <div className="px-4 py-6 max-w-lg mx-auto space-y-8">
        {/* Welcome banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl gradient-hero p-6"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 right-4 opacity-30"
          >
            <Sparkles className="h-24 w-24 text-primary-foreground" />
          </motion.div>

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/80 text-sm font-medium mb-1"
            >
              Welcome back,
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-primary-foreground mb-4"
            >
              {user?.name} 👋
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-primary-foreground/80 text-sm max-w-[200px]"
            >
              Continue your journey to becoming a finance expert!
            </motion.p>
          </div>
        </motion.div>

        {/* Progress overview */}
        {enrolledCourses.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Your Progress</h3>
                <p className="text-sm text-muted-foreground">
                  {enrolledCourses.length} course{enrolledCourses.length > 1 ? 's' : ''} enrolled
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">
                      {user?.certificates.length || 0} Certificates
                    </span>
                  </div>
                </div>
              </div>
              <ProgressCircle progress={totalProgress} size={100} label="Overall" />
            </div>
          </motion.div>
        )}

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-3"
        >
          {[
            { icon: BookOpen, label: 'Courses', value: courses.length, color: 'from-blue-500 to-cyan-400' },
            { icon: TrendingUp, label: 'Enrolled', value: enrolledCourses.length, color: 'from-emerald-500 to-teal-400' },
            { icon: Award, label: 'Earned', value: user?.certificates.length || 0, color: 'from-orange-500 to-amber-400' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-card rounded-2xl p-4 text-center"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} mb-2`}>
                <stat.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Continue learning */}
        {enrolledCourses.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">Continue Learning</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/courses')}
                className="text-primary"
              >
                View All
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="space-y-4">
              {enrolledCourses.slice(0, 2).map((course, index) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                  onClick={() => navigate(`/course/${course.id}`)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Featured courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">
              {enrolledCourses.length > 0 ? 'Explore More' : 'Featured Courses'}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/courses')}
              className="text-primary"
            >
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-4">
            {featuredCourses
              .filter((c) => !user?.enrolledCourses.includes(c.id))
              .slice(0, 2)
              .map((course, index) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                  onClick={() => navigate(`/course/${course.id}`)}
                />
              ))}
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}

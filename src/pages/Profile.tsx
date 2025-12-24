import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Briefcase, BookOpen, Award, LogOut, ChevronRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { courses } from '@/data/courses';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { ProgressCircle } from '@/components/ProgressCircle';
import { Certificate } from '@/components/Certificate';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const experienceLabelMap: Record<string, string> = {
  fresher: 'Fresher',
  associate: 'Associate',
  analyst: 'Analyst',
  professional: 'Professional',
};

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    navigate('/login');
    return null;
  }

  const enrolledCourses = courses.filter((c) => user.enrolledCourses.includes(c.id));
  const totalProgress = enrolledCourses.length > 0
    ? Math.round(
        enrolledCourses.reduce(
          (acc, course) => acc + (user.courseProgress[course.id]?.overallProgress || 0),
          0
        ) / enrolledCourses.length
      )
    : 0;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background pb-24 pt-16">
      <Header title="Profile" showBack />

      <div className="px-4 py-6 max-w-lg mx-auto space-y-6">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-6 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary mb-4"
          >
            <User className="h-10 w-10 text-primary-foreground" />
          </motion.div>

          <h2 className="text-xl font-bold text-foreground mb-1">{user.name}</h2>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mb-2">
            <Mail className="h-4 w-4" />
            {user.email}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            <Briefcase className="h-4 w-4" />
            {experienceLabelMap[user.experienceLevel]}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Learning Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">{enrolledCourses.length}</span>{' '}
                    courses enrolled
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">{user.certificates.length}</span>{' '}
                    certificates earned
                  </span>
                </div>
              </div>
            </div>
            <ProgressCircle progress={totalProgress} size={90} label="Overall" />
          </div>
        </motion.div>

        {/* Enrolled courses progress */}
        {enrolledCourses.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Course Progress</h3>
            <div className="space-y-3">
              {enrolledCourses.map((course, index) => {
                const progress = user.courseProgress[course.id]?.overallProgress || 0;
                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => navigate(`/course/${course.id}`)}
                    className="glass-card rounded-xl p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{course.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground truncate">{course.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {course.modules.length} modules
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-primary">{progress}%</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Progress value={progress} className="h-2" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Certificates */}
        {user.certificates.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Your Certificates</h3>
            <div className="space-y-4">
              {user.certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Certificate certificate={certificate} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Logout button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={handleLogout}
            className="w-full text-destructive border-destructive/30 hover:bg-destructive/10"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Button>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}

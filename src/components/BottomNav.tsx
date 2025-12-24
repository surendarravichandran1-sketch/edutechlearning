import { motion } from 'framer-motion';
import { Home, BookOpen, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border/50 safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-4 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="relative flex flex-col items-center gap-1 py-2 px-6 rounded-2xl transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 gradient-primary rounded-2xl"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <Icon
                className={`relative z-10 h-6 w-6 transition-colors ${
                  isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                }`}
              />
              <span
                className={`relative z-10 text-xs font-medium transition-colors ${
                  isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}

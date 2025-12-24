import { motion } from 'framer-motion';
import { Play, CheckCircle, Lock, Clock } from 'lucide-react';
import { Module } from '@/types';

interface ModuleCardProps {
  module: Module;
  index: number;
  isCompleted: boolean;
  isLocked: boolean;
  isCurrent: boolean;
  onClick: () => void;
}

export function ModuleCard({
  module,
  index,
  isCompleted,
  isLocked,
  isCurrent,
  onClick,
}: ModuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={!isLocked ? { scale: 1.02 } : undefined}
      whileTap={!isLocked ? { scale: 0.98 } : undefined}
      onClick={!isLocked ? onClick : undefined}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
        isLocked
          ? 'opacity-60 cursor-not-allowed'
          : 'cursor-pointer'
      } ${
        isCurrent
          ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
          : ''
      }`}
    >
      <div className="glass-card p-4">
        <div className="flex items-center gap-4">
          {/* Status indicator */}
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors ${
              isCompleted
                ? 'gradient-success'
                : isLocked
                ? 'bg-muted'
                : isCurrent
                ? 'gradient-primary animate-pulse'
                : 'bg-secondary'
            }`}
          >
            {isCompleted ? (
              <CheckCircle className="h-6 w-6 text-success-foreground" />
            ) : isLocked ? (
              <Lock className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Play className="h-5 w-5 text-foreground" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-muted-foreground">
                Module {index + 1}
              </span>
              {isCurrent && (
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full gradient-primary text-primary-foreground">
                  Continue
                </span>
              )}
            </div>
            <h4 className="font-semibold text-foreground truncate">
              {module.title}
            </h4>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{module.estimatedMinutes} min</span>
            </div>
          </div>

          {/* Arrow */}
          {!isLocked && (
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-primary"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Mail, User, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User as UserType } from '@/types';

const experienceLevels: { value: UserType['experienceLevel']; label: string; icon: string }[] = [
  { value: 'fresher', label: 'Fresher', icon: '🌱' },
  { value: 'associate', label: 'Associate', icon: '📚' },
  { value: 'analyst', label: 'Analyst', icon: '📊' },
  { value: 'professional', label: 'Professional', icon: '💼' },
];

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experienceLevel, setExperienceLevel] = useState<UserType['experienceLevel'] | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; experience?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    if (!experienceLevel) newErrors.experience = 'Please select your experience level';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && experienceLevel) {
      login(name, email, experienceLevel);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -left-1/2 w-full h-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full">
        {/* Logo and title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl gradient-primary mb-6 glow-primary"
          >
            <GraduationCap className="h-10 w-10 text-primary-foreground" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gradient mb-2">Welcome to EduTech</h1>
          <p className="text-muted-foreground">
            Your journey to professional excellence starts here
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              Full Name
            </label>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm text-destructive"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          {/* Email field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              Email Address
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm text-destructive"
              >
                {errors.email}
              </motion.p>
            )}
          </div>

          {/* Experience level */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              Experience Level
            </label>
            <div className="grid grid-cols-2 gap-3">
              {experienceLevels.map((level, index) => (
                <motion.button
                  key={level.value}
                  type="button"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setExperienceLevel(level.value)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    experienceLevel === level.value
                      ? 'border-primary gradient-primary text-primary-foreground'
                      : 'border-border bg-secondary/30 text-foreground hover:border-primary/50'
                  }`}
                >
                  <span className="text-2xl block mb-1">{level.icon}</span>
                  <span className="text-sm font-medium">{level.label}</span>
                </motion.button>
              ))}
            </div>
            {errors.experience && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm text-destructive"
              >
                {errors.experience}
              </motion.p>
            )}
          </div>

          {/* Submit button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button type="submit" size="lg" className="w-full">
              Start Learning
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>
        </motion.form>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          Founded by Surendar
          <Sparkles className="h-4 w-4 text-accent" />
        </motion.p>
      </div>
    </div>
  );
}

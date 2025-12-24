import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { courses } from '@/data/courses';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { CourseCard } from '@/components/CourseCard';
import { Input } from '@/components/ui/input';

export default function Courses() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-24 pt-16">
      <Header title="Courses" showBack />

      <div className="px-4 py-6 max-w-lg mx-auto space-y-6">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12"
          />
        </motion.div>

        {/* Course list */}
        <div className="space-y-4">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              onClick={() => navigate(`/course/${course.id}`)}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No courses found</p>
          </motion.div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}

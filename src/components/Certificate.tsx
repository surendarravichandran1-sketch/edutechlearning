import { motion } from 'framer-motion';
import { Award, Download } from 'lucide-react';
import { Certificate as CertificateType } from '@/types';
import { Button } from './ui/button';

interface CertificateProps {
  certificate: CertificateType;
}

export function Certificate({ certificate }: CertificateProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleDownload = () => {
    // In a real app, this would generate a PDF
    const certificateText = `
CERTIFICATE OF COMPLETION

This is to certify that

${certificate.userName}

has successfully completed the course

${certificate.courseName}

Completed on: ${formatDate(certificate.completedAt)}

Founder: ${certificate.founderName}
EduTech
    `;
    
    const blob = new Blob([certificateText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${certificate.courseName.replace(/\s+/g, '_')}_Certificate.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden rounded-2xl"
    >
      {/* Certificate design */}
      <div className="relative p-6 gradient-card border-2 border-primary/30">
        {/* Decorative corners */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />

        <div className="text-center space-y-4 py-4">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-2">
            <Award className="h-8 w-8 text-primary-foreground" />
          </div>

          {/* Title */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Certificate of Completion
            </p>
            <h3 className="text-xl font-bold text-gradient">EduTech</h3>
          </div>

          {/* Recipient */}
          <div className="py-3 border-y border-border/30">
            <p className="text-sm text-muted-foreground mb-1">This certifies that</p>
            <p className="text-lg font-bold text-foreground">{certificate.userName}</p>
            <p className="text-sm text-muted-foreground mt-2">has completed</p>
            <p className="text-lg font-semibold text-primary mt-1">
              {certificate.courseName}
            </p>
          </div>

          {/* Date and signature */}
          <div className="flex items-center justify-between text-sm">
            <div className="text-left">
              <p className="text-muted-foreground">Completed</p>
              <p className="font-medium text-foreground">
                {formatDate(certificate.completedAt)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground">Founder</p>
              <p className="font-medium text-foreground">{certificate.founderName}</p>
            </div>
          </div>

          {/* Download button */}
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="mt-4"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

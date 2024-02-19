'use client';

import { Button } from '../ui/button';
import { ArrowUpToLine, MessageSquareText } from 'lucide-react';

interface ButtonProps {
  size?: number;
  className?: string;
}

export const ScrollTop = ({ size = 16, className }: ButtonProps) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <Button variant='outline' size='icon' onClick={scrollTop} className={className}>
      <ArrowUpToLine size={size} />
    </Button>
  );
};

export const ScrollToComment = ({ size = 16, className }: ButtonProps) => {
  const scrollToGiscus = () => document.querySelector('.giscus')?.scrollIntoView();
  return (
    <Button variant='outline' size='icon' onClick={scrollToGiscus} className={className}>
      <MessageSquareText size={size} />
    </Button>
  );
};

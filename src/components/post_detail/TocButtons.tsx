'use client';

import { Button } from '../ui/button';
import { ArrowUpToLine, MessageSquareText } from 'lucide-react';

export const ScrollTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Button variant='outline' size='icon' onClick={scrollTop}>
      <ArrowUpToLine size={16} />
    </Button>
  );
};

export const ScrollToComment = () => {
  const scrollToGiscus = () =>
    document.querySelector('.giscus')?.scrollIntoView({ behavior: 'smooth' });
  return (
    <Button variant='outline' size='icon' onClick={scrollToGiscus}>
      <MessageSquareText size={16} />
    </Button>
  );
};

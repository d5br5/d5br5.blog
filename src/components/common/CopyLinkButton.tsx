'use client';

import { useState } from 'react';

import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import useWatchTimeout from '@/hook/useWatchTimeout';
import { Check, Link, XCircle } from 'lucide-react';

interface ButtonProps {
  size?: number;
  className?: string;
}

const CopyLinkButton = ({ size = 16, className }: ButtonProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  useWatchTimeout(copied, 3000, () => {
    setCopied(false);
  });

  const SuccessToastTitle = (
    <div className='flex items-center gap-3'>
      <Check size={16} /> Successfully Copied
    </div>
  );

  const successToast = () => toast({ title: SuccessToastTitle });

  const FailToastTitle = (
    <div className='flex items-center gap-3'>
      <XCircle size={16} /> Copy Failed
    </div>
  );

  const failToast = () => toast({ title: FailToastTitle, variant: 'destructive' });

  const handleCopy = async () => {
    const url = window.document.location.href;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      successToast();
    } catch (e) {
      console.error(e);
      failToast();
    }
  };

  return (
    <Button variant='outline' size='icon' onClick={handleCopy} className={className}>
      {copied ? <Check size={size} /> : <Link size={size} />}
    </Button>
  );
};

export default CopyLinkButton;

'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import * as D from '@/components/ui/dialog';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <D.Dialog defaultOpen open onOpenChange={handleOpenChange}>
      <D.DialogContent>{children}</D.DialogContent>
    </D.Dialog>
  );
}

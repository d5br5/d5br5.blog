import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface Props {
  url: string;
}

export const ServiceLink = ({ url }: Props) => {
  return (
    <Link href={url} target='_blank'>
      <Button className='gap-2' variant='outline'>
        <ExternalLink className='size-4' />
        Link to Website
      </Button>
    </Link>
  );
};

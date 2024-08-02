import Link from 'next/link';

import IconGithub from '@/components/icon/Github';
import { Button } from '@/components/ui/button';

interface Props {
  url: string;
}

export const GitRepo = ({ url }: Props) => {
  return (
    <Link href={url} target='_blank'>
      <Button className='gap-2' variant='outline'>
        <IconGithub className='size-4' />
        Git Repository
      </Button>
    </Link>
  );
};

import Link from 'next/link';

import { Button } from '../ui/button';
import { CategoryDetail } from '@/lib/post';

interface Props {
  isCurrent: boolean;
  displayName: string;
  href: string;
  count: number;
}

export const CategoryButton = ({ isCurrent, displayName, href, count }: Props) => {
  return (
    <li>
      <Button asChild size='sm' variant={isCurrent ? 'default' : 'ghost'}>
        <Link href={href}>
          {displayName} ({count})
        </Link>
      </Button>
    </li>
  );
};

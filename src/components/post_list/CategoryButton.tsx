import Link from 'next/link';

import { Button } from '../ui/button';

interface Props {
  isCurrent: boolean;
  displayName: string;
  href: string;
}

export const CategoryButton = ({ isCurrent, displayName, href }: Props) => {
  return (
    <li>
      <Button asChild size='sm' variant={isCurrent ? 'default' : 'ghost'}>
        <Link href={href}>{displayName}</Link>
      </Button>
    </li>
  );
};

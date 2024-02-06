import { PropsWithChildren } from 'react';

import { LinkProps } from 'next/link';

export const ExternalLink = ({ children, href, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      {...props}
      target='_blank'
      href={href.toString() || ''}
      className='text-pink-600 no-underline hover:underline underline-offset-4'
    >
      {children}
    </a>
  );
};

import { PropsWithChildren } from 'react';

import { LinkProps } from 'next/link';

export const ExternalLink = ({ children, href, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      {...props}
      target='_blank'
      href={href.toString() || ''}
      className='break-words text-pink-600 no-underline underline-offset-4 hover:underline'
    >
      {children}
    </a>
  );
};

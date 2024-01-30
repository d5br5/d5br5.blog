// import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { Callout } from './Callout';
import { Image } from './Image';
import { MDXComponents } from 'mdx/types';

export const MdxComponents: MDXComponents = {
  // a: ({ children, ...props }) => {
  //   return (
  //     <Link {...props} href={props.href || ''}>
  //       {children}
  //     </Link>
  //   );
  // },
  // img: Image,
  blockquote: Callout,
  Callout,

  // 마크다운에 사용하려는 다른 컴포넌트
};

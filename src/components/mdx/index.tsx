// import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { Callout } from '../Callout';
import { MDXComponents } from 'mdx/types';

export const MdxComponents: MDXComponents = {
  // a: ({ children, ...props }) => {
  //   return (
  //     <Link {...props} href={props.href || ''}>
  //       {children}
  //     </Link>
  //   );
  // },
  blockquote: (props: PropsWithChildren) => <div>{props.children} dd</div>,
  Callout: Callout,

  // 마크다운에 사용하려는 다른 컴포넌트
};

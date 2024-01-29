import Image from 'next/image';

// import Link from 'next/link';
import { MDXImage } from './MdxImage';
import { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  // a: ({ children, ...props }) => {
  //   return (
  //     <Link {...props} href={props.href || ''}>
  //       {children}
  //     </Link>
  //   );
  // },
  img: MDXImage as any,
  // 마크다운에 사용하려는 다른 컴포넌트
};

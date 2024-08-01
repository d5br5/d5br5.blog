import { Callout } from './Callout';
import { GitRepo } from './GitRepo';
import { Image } from './Image';
import { ExternalLink } from './Link';
import { ServiceLink } from './ServiceLink';
import { MDXComponents } from 'mdx/types';

export const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: Image as any,
  blockquote: Callout,
  Callout,
  GitRepo,
  ServiceLink,
};

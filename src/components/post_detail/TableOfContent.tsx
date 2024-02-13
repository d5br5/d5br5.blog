import CopyLinkButton from '../common/CopyLinkButton';
import { ScrollToComment, ScrollTop } from './TocButtons';
import { Post } from '@/config/types';
import { parseToc } from '@/lib/post';
import { cn } from '@/lib/utils';

interface Props {
  post: Post;
}

const TableOfContent = ({ post }: Props) => {
  const toc = parseToc(post.content);
  console.log(toc);
  return (
    <aside className='absolute -top-[100px] left-full h-full not-prose'>
      <div className='sticky z-10  top-[100px] mt-[100px] ml-[5rem]'>
        <div className='px-4 py-2 border-l mb-4'>
          <div className='font-bold mb-1'>on this page</div>
          <ul className='text-xs'>
            {toc.map((item) => (
              <li
                key={item.link}
                className={cn(item.indent === 1 && 'ml-4', 'py-1 whitespace-nowrap')}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex gap-2'>
          <ScrollTop />
          <ScrollToComment />
          <CopyLinkButton />
        </div>
      </div>
    </aside>
  );
};

export default TableOfContent;

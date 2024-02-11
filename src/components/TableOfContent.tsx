import { HeadingItem, Post } from '@/config/types';
import { parseToc } from '@/lib/post';
import { cn } from '@/lib/utils';

interface Props {
  post: Post;
}

const TableOfContent = ({ post }: Props) => {
  const toc = parseToc(post.content);
  console.log(toc);
  return (
    <div className='absolute -top-[100px] left-full h-full not-prose'>
      <div className='sticky z-10 px-4 py-2 top-[100px] mt-[100px] ml-[3rem] w-[250px] border rounded-md'>
        <div className='font-bold mb-1'>on this page</div>
        <ul className='text-xs'>
          {toc.map((item) => (
            <li key={item.link} className={cn(item.indent === 1 && 'ml-4', 'py-1')}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContent;

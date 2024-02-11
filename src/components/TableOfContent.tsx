import { HeadingItem, Post } from '@/config/types';
import { parseToc } from '@/lib/post';

interface Props {
  post: Post;
}

const TableOfContent = ({ post }: Props) => {
  const toc = parseToc(post.content);
  return (
    <div className='absolute top-0 left-full h-full'>
      <div className='sticky z-10 top-0 w-[300px]'>
        <div>On this page</div>
        <div>
          {toc.map((item) => (
            <div key={item.link}>{item.text}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;

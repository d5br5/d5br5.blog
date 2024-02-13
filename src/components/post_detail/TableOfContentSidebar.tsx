import CopyLinkButton from '../common/CopyLinkButton';
import { ScrollToComment, ScrollTop } from './TocButtons';
import { HeadingItem } from '@/config/types';
import { cn } from '@/lib/utils';

interface Props {
  toc: HeadingItem[];
}

const TableOfContent = ({ toc }: Props) => {
  return (
    <aside className='absolute -top-[100px] left-full h-[calc(100%+150px)] -mb-[100px] not-prose hidden xl:block '>
      <div className='sticky z-10  top-[100px] w-[200px] bottom-0 mt-[100px] ml-[5rem]'>
        <div className='px-4 py-2 border-l mb-4'>
          <div className='font-bold mb-1'>On this page</div>
          <ul className='text-xs'>
            {toc.map((item) => (
              <li key={item.link} className={cn(item.indent === 1 && 'ml-4', 'py-1')}>
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

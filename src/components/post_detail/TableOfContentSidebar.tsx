import CopyLinkButton from '../common/CopyLinkButton';
import { ScrollToComment, ScrollTop } from './TocButtons';
import { HeadingItem } from '@/config/types';
import { cn } from '@/lib/utils';

interface Props {
  toc: HeadingItem[];
}

const TableOfContent = ({ toc }: Props) => {
  return (
    <aside className='not-prose absolute -top-[100px] left-full -mb-[100px] hidden h-[calc(100%+150px)] xl:block '>
      <div className='sticky bottom-0  top-[100px] z-10 ml-[5rem] mt-[100px] w-[200px]'>
        <div className='mb-4 border-l px-4 py-2'>
          <div className='mb-1 font-bold'>On this page</div>
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

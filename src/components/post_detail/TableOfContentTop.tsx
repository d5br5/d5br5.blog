import { HeadingItem } from '@/config/types';
import { cn } from '@/lib/utils';

interface Props {
  toc: HeadingItem[];
}

const TableOfContentTop = ({ toc }: Props) => {
  if (toc.length === 0) return null;

  return (
    <nav className='xl:hidden'>
      <h2 id='table-of-contents-top'>On this page</h2>
      <ul>
        {toc.map((item) => (
          <li key={item.link} className={cn(item.indent === 1 && 'ml-4', 'py-1')}>
            {item.text}
          </li>
        ))}
      </ul>
      <hr />
    </nav>
  );
};

export default TableOfContentTop;

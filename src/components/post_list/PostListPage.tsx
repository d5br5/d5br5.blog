import { CategoryButton } from './CategoryButton';
import PostCard from './PostCard';
import { getCategoryList, getCategoryPublicName, getSortedPostList } from '@/lib/post';

interface PostListProps {
  category?: string;
}

const PostListPage = async ({ category }: PostListProps) => {
  const postList = await getSortedPostList(category);
  const categoryList = getCategoryList().map((dirName) => ({
    dirName,
    publicName: getCategoryPublicName(dirName),
  }));

  return (
    <section className='max-w-[950px] w-full mx-auto px-4 mt-14'>
      <section className='mb-10'>
        <ul className='flex gap-3'>
          <CategoryButton href='/blog' isCurrent={!category} displayName='All' />
          {categoryList.map((cg) => (
            <CategoryButton
              key={cg.dirName}
              href={`/blog/${cg.dirName}`}
              displayName={cg.publicName}
              isCurrent={cg.dirName === category}
            />
          ))}
        </ul>
      </section>
      <section className=''>
        <ul className='grid md:grid-cols-2 grid-cols-1 lg:gap-12 gap-8'>
          {postList.map((post) => (
            <PostCard key={post.url + post.date} post={post} />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default PostListPage;

import { CategoryButton } from './CategoryButton';
import PostCard from './PostCard';
import { getCategoryList, getCategoryPublicName, getPostList } from '@/lib/post';

interface PostListProps {
  category?: string;
}

const PostListPage = async ({ category }: PostListProps) => {
  const postList = await getPostList(category);
  const categoryList = getCategoryList().map((dirName) => ({
    dirName,
    publicName: getCategoryPublicName(dirName),
  }));

  return (
    <>
      <section className='w-[1000px] mx-auto mb-10'>
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
      <section className='w-[1000px] mx-auto'>
        <ul className='grid grid-cols-2	gap-4'>
          {postList.map((post) => (
            <PostCard key={post.url + post.date} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default PostListPage;

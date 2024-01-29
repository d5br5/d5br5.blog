type Props = {
  params: { category: string; slug: string };
};

// // [231123 by DOH] 허용된 param 외 접근시 404
// export const dynamicParams = true

// export async function generateStaticParams() {

//   // return langs.map(({ locale }: any) => ({
//   //   lang: getKeyByValue(langMap, locale),
//   // }))
// }

const PostDetail = ({ params }: Props) => {
  const { category, slug } = params;

  return (
    <div>
      <div>post detail</div>
      <div>category : {category}</div>
      <div>slug : {slug}</div>
    </div>
  );
};

export default PostDetail;

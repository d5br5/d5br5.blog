type Props = {
  params: { slug: string };
};

const PostDetail = ({ params }: Props) => {
  return <div>post detail : {params.slug}</div>;
};

export default PostDetail;

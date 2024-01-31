interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <>
      <img src={src} alt={alt} className='mx-auto rounded-md mt-8 mb-0' />
      <span className='w-full block text-center mb-8 mt-2 text-sm text-gray-500 dark:text-gray-400'>
        {alt}
      </span>
    </>
  );
};

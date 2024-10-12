import Link from 'next/link';
import React from 'react';
import { VT323 } from 'next/font/google';
import { Post } from '../utils/interface';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface Props {
  post: Post;
}

const dateFont = VT323({ weight: '400', subsets: ['latin'] });

const PostComponent = ({ post }: Props) => {
  return (
    <div className={cardStyle}>
      <div className="col-span-1 self-center">
        <Link href={`/posts/${post?.slug?.current}`}>{post.avatar && <Image src={urlForImage(post.avatar).url()} alt="Post" width={120} height={120} className="rounded-md" />}</Link>
      </div>
      <div className="ml-5 md:ml-0 col-span-4">
        <Link href={`/posts/${post?.slug?.current}`}>
          <h2 className="text-base md:text-2xl dark:text-gray-400 line-clamp-3 whitespace-pre-wrap">{post?.title}</h2>
          <p className={`${dateFont.className} my-2 text-[#93a7c2]`}>{new Date(post?.publishedAt).toDateString()}</p>
          <p className="dark:text-gray-400 mb-4 line-clamp-2 hidden md:block">{post?.excerpt}</p>
        </Link>

        <div className="flex-col hidden md:flex-row md:flex">
          {post?.tags?.map(tag => (
            <span key={tag?._id} className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-[#1F2937] border-0 md:border dark:border-gray-900 underline md:no-underline">
              #{tag?.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostComponent;

const cardStyle = `
grid
grid-cols-5
mb-8
p-4
border
border-gray-900
rounded-md
shadow-sm
md:hover:shadow-md
md:hover:bg-[#f1f5f9]
md:hover:dark:bg-[#314158]
transition-colors
duration-[400ms]
`;

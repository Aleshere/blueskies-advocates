import React from 'react';
import Header from '@/app/components/Header';
import SocialShare from '@/app/components/SocialShare';
import { slugify } from '@/app/utils/helpers';
import { Post } from '@/app/utils/interface';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import { VT323 } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher';
import { ScrollToTop } from '@/app/utils/ScrollToTop';

const dateFont = VT323({ weight: '400', subsets: ['latin'] });

interface Params {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    avatar,
    publishedAt,
    excerpt,
    _id,
    "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
    body,
    tags[]-> {
      _id,
      slug,
      name
    },
  }
  `;
  const post = await client.fetch(query);
  console.log(urlForImage(post.avatar).width(1000).height(1000).url());
  return post;
}

export const revalidate = 60;

export async function generateMetadata({ params }: Params): Promise<Metadata | undefined> {
  const post: Post = await getPost(params?.slug);

  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'en_US',
      url: `https://weareblueskies.com/posts/${params.slug}`,
      siteName: 'BlueSkies Advocates',
      images: [
        {
          url: urlForImage(post.avatar).width(1000).height(1000).url(),
          alt: `Preview image for ${post.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary',
      site: '@weAreBlueskies',
      title: post.title,
      description: post.excerpt,
      creator: '@weAreBlueskies',
      images: [
        {
          url: urlForImage(post.avatar).width(1000).height(1000).url(),
          alt: `Preview image for ${post.title}`,
        },
      ],
    },
  };
}

const page = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header title={post?.title} />
      <ScrollToTop />

      <div className="text-center">
        <div className="mb-6">
          <LanguageSwitcher />
        </div>
        <span className={`${dateFont?.className} text-[#93a7c2]`}>{new Date(post?.publishedAt).toDateString()}</span>
        <div className="mt-5">
          {post?.tags?.map(tag => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-[#1F2937] border dark:text-[#93a7c2]">#{tag.name}</span>
            </Link>
          ))}
        </div>

        <div className={richTextStyles}>
          <PortableText value={post.body} components={myPortableTextComponents} />
        </div>

        <div className="flex align-middle justify-center mb-6 mt-10">Share this Article</div>
        <div className="flex align-middle justify-center mb-16">
          <SocialShare url={`https://weareblueskies.com/posts/${params.slug}`} title={post?.excerpt} />
        </div>

        <div className="text-center mt-10 mb-6">
          -<Link href="/" className='link' > Back to All Articles </Link>-
        </div>
      </div>
    </div>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => <Image src={urlForImage(value).url()} alt="Post" width={700} height={700} />,
  },
  block: {
    h2: ({ value }: any) => (
      <h2 id={slugify(value.children[0].text)} className="text-3xl font-bold mb-3">
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3 id={slugify(value.children[0].text)} className="text-2xl font-bold mb-3">
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4 id={slugify(value.children[0].text)} className="text-2xl font-bold mb-3">
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }: any) => (
      <h5 id={slugify(value.children[0].text)} className="text-2xl font-bold mb-3">
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }: any) => (
      <h6 id={slugify(value.children[0].text)} className="text-xl font-bold mb-3">
        {value.children[0].text}
      </h6>
    ),
  },
};

const richTextStyles = `
post-page
mt-14
text-left
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;

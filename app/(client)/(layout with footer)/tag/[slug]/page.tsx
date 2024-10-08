import Header from '@/app/components/Header';
import PostComponent from '@/app/components/PostComponent';
import { Post } from '@/app/utils/interface';
import { ScrollToTop } from '@/app/utils/ScrollToTop';
import { client } from '@/sanity/lib/client';
import React from 'react';

async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    slug,
    avatar,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 60;

export async function generateMetadata({ params }: Params) {
  return {
    title: `#${params.slug}`,
    description: `Posts with the tag ${params.slug}`,
    openGraph: {
      title: `#${params.slug}`,
      description: `Posts with the tag ${params.slug}`,
      type: 'website',
      locale: 'en_US',
      url: `http://www.weareblueskies.com/tag/${params.slug}`,
      siteName: 'BlueSkies Advocates',
      images: [
        {
          url: 'https://www.weareblueskies.com/opengraph-image.png',
          alt: 'Preview image for our blog',
        },
      ],
    },
    twitter: {
      card: 'summary',
      site: '@weAreBlueskies',
      title: `#${params.slug}`,
      description: `Posts with the tag ${params.slug}`,
      creator: '@weAreBlueskies',
      images: [
        {
          url: 'https://www.weareblueskies.com/twitter-image.png',
          alt: 'Preview image for our blog',
        },
      ],
    },
  };
}

interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Params) => {
  const posts: Array<Post> = await getPostsByTag(params.slug);

  return (
    <div>
      <Header title={`#${params?.slug}`} tags />
      <ScrollToTop />

      <div>{posts?.length > 0 && posts?.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).map(post => <PostComponent key={post?._id} post={post} />)}</div>
    </div>
  );
};

export default page;

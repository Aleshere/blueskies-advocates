import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";

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

export const revalidate = 600;

export async function generateMetadata({ params }: Params) {
  return {
    title: `#${params.slug}`,
    description: `Posts with the tag ${params.slug}`,
    openGraph: {
      title: `#${params.slug}`,
      description: `Posts with the tag ${params.slug}`,
      type: "website",
      locale: "en_US",
      url: `http://www.weareblueskies.com/${params.slug}`,
      siteName: "BlueSkies Advocates",
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
      <div>
        {posts?.length > 0 && posts?.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
};

export default page;
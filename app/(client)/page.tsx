import { client } from "@/sanity/lib/client"
import Header from "../components/Header";
import { Post } from "../utils/interface";
import BlogList from "../components/BlogList";


async function getPosts() {
  const query = `
*[_type == "post"] {
  title,
  slug,
  avatar,
  publishedAt,
  excerpt,
  _id,
  tags[]-> {
    _id,
    slug,
    name
  }
}
`;
const data = await client.fetch(query);
return data;
}

export const revalidate = 80;

export default async function Home() {
  const posts: Post[] = await getPosts()
  
  return (
    // <div>
    //   <Header title="Articles" />
    //   <div>
    //     {posts?.length > 0 && posts?.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).map((post) => <PostComponent key={post?._id} post={post} />)}
    //   </div>
    // </div>
    <>    
      <Header title="Articles" />
      <BlogList posts={posts} />
    </>
  );
}

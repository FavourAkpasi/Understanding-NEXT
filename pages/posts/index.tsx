import Link from "next/link";
import { Post, Posts } from "../../types";

const Posts = ({ posts }: Posts) => {
  return (
    <>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/post">Post</Link>
      </div>
      <h1>posts</h1>
      {posts.map((post: Post) => (
        <>
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </div>
        </>
      ))}
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
}

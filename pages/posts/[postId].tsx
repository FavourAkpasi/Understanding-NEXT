import Link from "next/link";
import { Post } from "../../types";
import { useRouter } from "next/router";

type IPost = {
  post: Post;
};

const PostDetails = ({ post }: IPost) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading ...</h2>;
  }
  return (
    <>
      <Link href="/">HOME</Link>
      <h1>Post Details Page</h1>
      <div key={post.id}>
        <h2>
          {post.id} {post.title}
        </h2>

        <h3>{post.body}</h3>
      </div>
    </>
  );
};

export default PostDetails;

//getStaticPaths  is used in conjunction with getStaticProps to specify the dynamic routes that should be generated at build time.

export async function getStaticPaths() {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post: Post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await res.json();

  return { props: { post } };
}

import Link from "next/link";
import { Comment } from "../../types";
import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  return data;
};

const Comments = () => {
  const { data, error }: any = useSWR("comments", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Comments</h1>
      {data.map((comment: Comment) => (
        <h2>{comment.name}</h2>
      ))}
    </div>
  );
};

export default Comments;

// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/comments");
//   const comments = await res.json();

//   return {
//     props: { comments },
//   };
// }

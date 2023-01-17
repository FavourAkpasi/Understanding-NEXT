import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link href="/users">users</Link>
      </div>
      <div>
        <Link href="/posts">posts</Link>
      </div>
      <div>
        <Link href="/albums">albums</Link>
      </div>
      <div>
        <Link href="/comments">comments</Link>
      </div>
    </>
  );
};

export default Home;

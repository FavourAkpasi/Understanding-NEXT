import Link from "next/link";
import { Album } from "../../types";

type IABU = {
  albumsByUsers: Album[];
  userId: String;
};

const AlbumsByUsers = ({ albumsByUsers, userId }: IABU) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Albums by user {userId} </h1>
      {albumsByUsers.map((album: Album) => (
        <div key={album.id}>
          <p>{album.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumsByUsers;

export async function getServerSideProps({ params }: any) {
  const userId = params.userId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  const albumsByUsers = await res.json();
  // console.log({ params });

  return { props: { albumsByUsers, userId } };
}

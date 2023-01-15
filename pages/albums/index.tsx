import { Album, Albums } from "../../types";

const Albums = ({ albums }: Albums) => {
  return (
    <div>
      <h1>Albums</h1>
      {albums.map((album: Album) => (
        <div key={album.id}>
          <p>{album.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Albums;

export async function getServerSideProps({ req }: any) {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await res.json();
  console.log({ req });

  return { props: { albums } };
}

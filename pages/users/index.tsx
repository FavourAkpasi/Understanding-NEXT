import { User, Users } from "../../types";
import Link from "next/link";

const Users = ({ users }: Users) => {
  return (
    <>
      <h1>Users List</h1>
      <h2>
        <Link href="/">Home</Link>
      </h2>
      {users.map((user: User) => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </>
  );
};

export default Users;

// ##note that getStaticProps is only executed on the server-side during the build process, so IT can't be used it to fetch data dynamically on the client-side.

export async function getStaticProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return { props: { users } };
}

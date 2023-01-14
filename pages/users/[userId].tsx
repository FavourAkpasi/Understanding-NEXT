import { useRouter } from "next/router";
import { users } from "../../db";
import Link from "next/link";

const UserDetail = () => {
  const router = useRouter();
  const userId = Number(router.query.userId);
  const selectedUser = users.find((user) => user.id === userId);

  return (
    <div>
      <Link href="/users">Users</Link>
      <h2>user details page</h2>
      <>
        <div>name: {selectedUser?.name}</div>
        <div>address: {selectedUser?.address.city}</div>
        <div>company: {selectedUser?.company.name}</div>
      </>
    </div>
  );
};

export default UserDetail;

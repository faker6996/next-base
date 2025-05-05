import { getUsers } from "@/app/apis/userApi";

export default async function HomePage() {
  //const users = await getUsers();

  return (
    <>
      <div>
        <h1>Danh sách người dùng:</h1>
        {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
      </div>
    </>
  );
}

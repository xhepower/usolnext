import { User, UsersContainerProps } from "../../../../types";
import UserCard from "./UserCard";
interface userListInf {
  users: User[] | User;
  role: string;
  setCreandoUser: Function;
}
export default function UserList(props: userListInf) {
  const { role, users, setCreandoUser } = props;

  return (
    <div className="users-list">
      {role == "admin" ? (
        <div>
          <button
            value={"Crear usuario"}
            onClick={() => {
              setCreandoUser(true);
            }}
          >
            Crear usuario
          </button>
        </div>
      ) : null}
      {!Array.isArray(users) ? (
        <UserCard user={users} key={`user${users.id}`}></UserCard>
      ) : (
        users.map((user) => {
          return <UserCard user={user} key={`user${user.id}`}></UserCard>;
        })
      )}
    </div>
  );
}
// {role == "admin" ? (
//   <div>
//     <button
//       value={"Crear usuario"}
//       onClick={() => {
//         setCreandoUser(true);
//       }}
//     >
//       Crear usuario
//     </button>
//   </div>
// ) : null}
// {!Array.isArray(users) ? (
//   <UserCard user={users} key={`user${users.id}`}></UserCard>
// ) : (
//   users.map((user) => {
//     return <UserCard user={user} key={`user${user.id}`}></UserCard>;
//   })
// )}

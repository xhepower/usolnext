import { User } from "../../../../types";
interface userProps {
  user: User;
}
export default function UserCard(props: userProps) {
  const { id, email, role, rutas } = props.user;

  return (
    <div className="card card-user">
      <details>
        <summary>
          <div>
            <p>
              <b>Email:</b>
              {email}
            </p>
            <p>
              <b>Role:</b>
              {role}
            </p>
          </div>
        </summary>
      </details>
    </div>
  );
}

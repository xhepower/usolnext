import { datosToken } from "app/app/utils/token";
import NavSalir from "./NavSalir";

interface navProps {
  token: string | null;
}

export async function Nav(props: navProps) {
  const pay = await datosToken();
  const role = pay?.role;
  const sub = pay?.sub;
  const email = pay?.email;

  return (
    <header>
      <nav>
        <div>
          <p>{email}</p>
          <p>{role}</p>
        </div>
        <NavSalir></NavSalir>
      </nav>
    </header>
  );
}

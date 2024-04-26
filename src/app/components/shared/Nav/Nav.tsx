import { datosToken } from "app/app/utils/token";
import NavSalir from "./NavSalir";
import "./Nav.css";
interface navProps {
  token: string | null;
}

export async function Nav(props: navProps) {
  const pay = await datosToken();
  const role = pay?.role;
  const sub = pay?.sub;
  const email = pay?.email;
  const texto = `${email}
  ${role}`;
  return (
    <header className="header-dentro">
      <nav>
        <div className="info-user">{texto}</div>
        <NavSalir></NavSalir>
      </nav>
    </header>
  );
}

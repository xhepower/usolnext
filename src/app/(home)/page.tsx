import { User } from "../../../types";
import UsersContainer from "../components/UsersContainer/UsersContainer";

import { getAllUsers, getOneUser } from "../services/appService";
import { urls } from "../services/urls";
import { datosToken, leerToken } from "../utils/token";

export default async function Home() {
  const role = (await datosToken())?.role;
  const id = (await datosToken())?.sub;
  let datos: User[] = [];
  if (role == "admin") {
    datos = await getAllUsers();
  } else {
    datos = await getOneUser(Number(id));
  }

  return (
    <section>
      <UsersContainer users={datos} role={role}></UsersContainer>
    </section>
  );
}

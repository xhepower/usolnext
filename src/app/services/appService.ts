import { urls } from "./urls";

export const getAllUsers = async () => {
  try {
    const rta = await fetch(`${urls.app.users}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!rta.ok) {
      throw new Error("Error al obtener los datos");
    }
    return await rta.json();
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};
export const getOneUser = async (id: number) => {
  try {
    const rta = await fetch(`${urls.app.users}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!rta.ok) {
      throw new Error("Error al obtener los datos");
    }
    return await rta.json();
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};

export const getAllPdfs = async () => {
  try {
    const rta = await fetch(`${urls.app.pdfs}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!rta.ok) {
      throw new Error("Error al obtener los datos");
    }
    return await rta.json();
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};

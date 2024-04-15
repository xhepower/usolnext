"use server";
import { JwtPayload, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { number, string } from "yup";
import { payInterface } from "../../../types";

export async function guardarToken(token: string) {
  const cookiesP = cookies();
  if (token) {
    cookiesP.set("accessToken", token, {
      path: "/",

      httpOnly: true,
    });
  }
}
export async function borrarToken() {
  const cookiesP = cookies();
  cookiesP.delete("accessToken");
}
export async function leerToken() {
  const cookiesP = cookies();
  return cookiesP.get("accessToken") || null;
}
export async function datosToken() {
  const token = await leerToken();
  if (token && process.env.JWTSECRET) {
    const pay: JwtPayload | string | payInterface = verify(
      token?.value,
      process.env.JWTSECRET
    );

    // Verificar si pay es de tipo JwtPayload antes de acceder a la propiedad role
    if (typeof pay !== "string" && pay.role) {
      let role;
      let sub;
      let email;
      role = pay.role;
      sub = pay.sub;
      email = pay.email;
      return { role, sub, email };
    } else {
      throw new Error("No se pudo obtener el role del token.");
    }
  }
  return null;
}

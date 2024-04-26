"use client";
import { redirigir } from "app/app/actions";
import { borrarToken } from "app/app/utils/token";

export default function NavSalir() {
  return (
    <div className="nav-salir">
      <button
        className="boton-nav  boton-salir"
        onClick={async () => {
          await borrarToken();
          await redirigir("/auth/login");
        }}
      >
        X
      </button>
    </div>
  );
}

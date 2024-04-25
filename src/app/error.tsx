"use client";

import { errorPageProps } from "../../types";

export default function GlobalError({ error, reset }: errorPageProps) {
  return (
    <div>
      <h1>OCURRIO UN ERROR :(</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  );
}

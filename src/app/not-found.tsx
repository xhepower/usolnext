import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h2>Pagina no encontrada</h2>
      <Link href={"/"}>regresar al home</Link>
    </section>
  );
}

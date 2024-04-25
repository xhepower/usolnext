import "./Header.css";
export function Header() {
  return (
    <header>
      <div className="banner">
        <h1 className="titulo-banner">{process.env.NOMBRE_EMPRESA}</h1>
      </div>
    </header>
  );
}

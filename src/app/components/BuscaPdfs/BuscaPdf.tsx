import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Pdf } from "../../../../types";
import "./BuscaPdf.css";
interface IProps {
  initialData: Pdf[] | null;
  setDatos: Dispatch<SetStateAction<Pdf[] | null>>;
}

const buscarEnArray = (array: Pdf[] | null, textoBusqueda: string): Pdf[] => {
  return array
    ? array?.filter((persona) =>
        Object.values(persona).some(
          (valor) =>
            typeof valor === "string" &&
            valor.toLowerCase().includes(textoBusqueda.toLowerCase())
        )
      )
    : [];
};
function BuscaPdf(props: IProps) {
  const { setDatos, initialData } = props;
  const [textoBusqueda, setTextoBusqueda] = useState<string>("");
  useEffect(() => {
    setDatos(buscarEnArray(initialData, textoBusqueda));
  }, [textoBusqueda]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextoBusqueda(event.target.value);
  };

  return (
    <div className="search-container">
      <form action="" className="search-form">
        <input
          type="search"
          placeholder="Buscar..."
          value={textoBusqueda}
          onChange={handleInputChange}
          className="search-input"
        />
      </form>
    </div>
  );
}

export default BuscaPdf;

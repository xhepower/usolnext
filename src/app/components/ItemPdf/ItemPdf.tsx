import { useEffect, useState } from "react";

import { FaEye } from "react-icons/fa";
import Image from "next/image";
import { Pdf } from "../../../../types";
import "./itemPdf.css";

import { urls } from "app/app/services/urls";
interface IDato {
  dato: Pdf;
}

function ItemPdf(props: IDato) {
  function extraerFechaNombre(nombre: string) {
    // Buscar la posición del segundo guion
    const segundoGuionIndex = nombre.indexOf("-", nombre.indexOf("-") + 1);

    if (segundoGuionIndex !== -1) {
      // Extraer la subcadena desde el segundo guion hasta el final
      const subcadena = nombre.substring(segundoGuionIndex + 1);
      if (subcadena == "null") return "null";
      const partes = subcadena.split("-");
      const partesConCeros = partes.map((parte) => parte.padStart(2, "0"));
      const subcadenaConCeros = partesConCeros.join("-");
      return subcadenaConCeros;
    } else {
      return "null"; // Si no se encuentra el segundo guion, devolver null o algún valor indicativo de error
    }
  }
  const { date, idNumber, name, phone, nombrePDF, city, passport } = props.dato;
  const texto = `Fecha:${
    extraerFechaNombre(nombrePDF) != null
      ? extraerFechaNombre(nombrePDF)
      : "null"
  }
  Nombre: ${name}
  Telefono: ${phone}
  City: ${city}
  Identidad: ${idNumber}
  Pasaporte: ${passport}`;
  const abrirPDF = () => {
    const urlPDF = `${urls.app.docs}/${nombrePDF}`; // Reemplaza esto con la URL de tu PDF
    window.open(urlPDF, "_blank");
  };
  return (
    <div className="itemPdf">
      <div className="img-container">
        <Image
          src={`${urls.app.photos}/${nombrePDF}`}
          alt=""
          height={200}
          width={500}
        />
        <Image
          src={`${urls.app.barcodes}/${nombrePDF}`}
          alt=""
          height={200}
          width={500}
        />
      </div>
      <div className="info-container">{texto}</div>
      <div className="buttons-container">
        <button onClick={abrirPDF}>
          <FaEye />
        </button>
      </div>
    </div>
  );
}

export default ItemPdf;

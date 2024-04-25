import { useEffect, useState } from "react";
import Image from "next/image";
import { Pdf } from "../../../../types";
import "./itemPdf.css";

import { urls } from "app/app/services/urls";
interface IDato {
  dato: Pdf;
}
// export interface Pdf {
//   id: number;
//   date: Date | null;
//   name: string;
//   idNumber: string;
//   city: string;
//   address: string;
//   phone: string;
//   email: string;
//   passport: string;
//   purpose?: string;
//   issued?: string | undefined;
//   nombrePDF: string;
// }

function ItemPdf(props: IDato) {
  const { date, idNumber, name, phone, nombrePDF, city, passport } = props.dato;
  const texto = `fecha:${date}
  Nombre: ${name}
  Telefono: ${phone}
  City: ${city}
  Identidad: ${idNumber}
  Pasaporte: ${passport}`;
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
        <button>Ver</button>
      </div>
    </div>
  );
}

export default ItemPdf;

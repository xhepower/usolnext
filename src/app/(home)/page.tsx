"use client";
import { useEffect, useState } from "react";
import { Pdf, User } from "../../../types";
import UsersContainer from "../components/UsersContainer/UsersContainer";

import { getAllPdfs, getAllUsers, getOneUser } from "../services/appService";
import { urls } from "../services/urls";
import { datosToken, leerToken } from "../utils/token";
import { useSearchParams } from "next/navigation";
import ItemPdf from "../components/ItemPdf/ItemPdf";
import BuscaPdf from "../components/BuscaPdfs/BuscaPdf";

import "./home.css";
import InfiniteScroll from "react-infinite-scroller";

// <{
//   role: any;
//   sub: string | undefined;
//   email: any;
// } | null>
export default function Home() {
  const [datos, setDatos] = useState<Pdf[] | null>([]);
  const [initialData, setInitialData] = useState<Pdf[] | null>([]);
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await getAllPdfs();
        setInitialData(response);
        setDatos(response);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <section className="container">
      <BuscaPdf initialData={initialData} setDatos={setDatos}></BuscaPdf>
      {datos?.map((dato) => {
        return <ItemPdf key={`dato-${dato.nombrePDF}`} dato={dato} />;
      })}
    </section>
  );
}

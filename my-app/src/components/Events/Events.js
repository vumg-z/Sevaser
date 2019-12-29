import React from "react";
import Card from "../Card/Card";

export default function EventsList() {
  return (
    <div>
      <Card texto={"Carne Asada"} tipo={"Fiesta"} ></Card>
      <Card texto={"Hamburguesada"} tipo={"Fiesta"}></Card>
      <Card texto={"Fiesta de Cumpleaños"} tipo={"Fiesta"}></Card>
      <Card texto={"Fiesta Sorpresa"} tipo={"Fiesta"}></Card>
      <Card texto={"Posada"} tipo={"Fiesta"}></Card>
      <Card texto={"Despedida de Soltero"} tipo={"Fiesta"}></Card>
      <Card texto={"Peda Masiva"} tipo={"Fiesta"}></Card>
      <Card texto={"Reu con los compas"} tipo={"Fiesta"}></Card>
      <Card texto={"Algo tranqui"} tipo={"Fiesta"}></Card>
    </div>
  );
}

import React, {useEffect, useState} from "react";
import Card from "../Card/Card";


export default function EventList(props){

  function handleClick(){
    // alert("no pasa nada bb")
  }

  return(
    <div>
      <Card data={"16 Nov"} evento={props.evento} action={handleClick}></Card>
      <Card data={"Gasto estimado"} evento={"$1125"} action={handleClick}></Card>
      <Card data={"Personas"} evento={"25"} action={handleClick}></Card>
      <Card data={"Costo por persona"} evento={"$45"} action={handleClick}></Card>
      <Card data={"Comida principal"} evento={"Arrachera Asada"} action={handleClick}></Card>
      <Card data={"Bebida principal"} evento={"Cerveza"} action={handleClick}></Card>
      <Card data={"Botana principal"} evento={"Churros"} action={handleClick}></Card>
      <Card data={"Desechables"} evento={"Baratos"} action={handleClick}></Card>
      <Card evento={"Lista de compras"} action={handleClick}></Card>
    </div>
  )
}



// export default function EventsList() {
//   return (
//     <div>
//       <Card data={"16 Nov"} evento={"Carne Asada"}></Card>
//       <Card data={"Gasto estimado"} evento={"$1125"}></Card>
//       <Card data={"Personas"} evento={"25"}></Card>
//       <Card data={"Costo por persona"} evento={"$45"}></Card>
//       <Card data={"Comida principal"} evento={"Arrachera Asada"}></Card>
//       <Card data={"Bebida principal"} evento={"Cerveza"}></Card>
//       <Card data={"Botana principal"} evento={"Churros"}></Card>
//       <Card data={"Desechables"} evento={"Baratos"}></Card>
//       <Card evento={"Lista de compras"}></Card>
//     </div>
//   );
// }

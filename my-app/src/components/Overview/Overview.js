import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { ListItemSecondaryAction } from "@material-ui/core";


export default function EventList(props) {

  const [desechable, setDesechable] = useState("");

  //costo por persona es igual al gasto estimado entre la cantidad de personas ??? me pone 
  //a dudar por que la app no tiene ningun boton para elegir cantidad de personas xD

  const [precioEntrePersona, setPrecioEntrePersona] = useState(60);

  // la eleccion de perosnas causara un producto entre su cantidad y el precio estimado de los productos???

  const [cantidadDePersonas, setCantidadDePersonas] = useState(25);

  // debo de tener un segundo estado que renderize el componente que contenga las comidas principales,
  // esto para no tener que renderizar todo los componentes de una.

  const [comidaPrincipal, setComidaPrincipal] = useState([])

  useEffect(()=>{

    // hago un nuevo arreglo comidas donde almaceno las comidas secundarias filtrando de la data (que es un arreglo de diferentes eventos)
    // el unico elemento que necesitamos
    // props.data es toda la data, item.nombre es cada elemento en el arreglo checando su propiedad nombre, cuando sea igual 
    // al evento que estamos mandando a llamar desde el componente events es cuando me quedo con ese elemento. 
    // item.nombre == props. evento  <- esto
    // nombre: "Carne Asada" == Carne Asada 

    const comidas = props.data.filter(item => item.nombre == props.evento)
    const botanas = props.botanasData
    const bebidas = props.bebidasData
    const desechables = ["Baratos", "Caros"]

    if(comidas[0] != undefined){
      setComidaPrincipal(comidas[0].principal[0])
      // setBotana(botanas[0].nombre)
      // setBebida(bebidas[0].tipo)
      setDesechable(desechables[0])
    }
  })


  function handleClick() {
    // alert("no pasa nada bb")
  }

  // cuando se haga click en el evento se tiene que renderizar las variantes del evento tambien.

  // console.log(props.bebidasData)
  // console.log(props.botanasData)


  return (
    <div>
      <Card data={"16 Nov"} evento={props.evento} action={handleClick} />
      <Card
        data={"Gasto estimado"}
        evento={props.precio}
        action={handleClick}
      />
      <Card data={"Personas"} evento={cantidadDePersonas} action={handleClick} />
      <Card data={"Costo por persona"} evento={precioEntrePersona} action={handleClick} />
      <Card
        data={"Comida principal"}
        evento={comidaPrincipal}
        action={handleClick}
      />
      <Card data={"Bebida principal"} evento={props.bebida} action={handleClick} />
      <Card data={"Botana principal"} evento={props.botana} action={handleClick} />
      <Card data={"Desechables"} evento={desechable} action={handleClick} />
      <Card evento={"Lista de compras"} action={props.handleClick} index={2}></Card>
    </div>
  );
}



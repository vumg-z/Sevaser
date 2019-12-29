import React , {useState}from "react";
import Card from "../Card/Card";
import Data from "../Data/Get";

// codigo spageti del que no estoy orgulloso...

// datos por default

let platillo = "...";
let ingredientePrincipal = "...";
let bebida = "...";
let botana = "...";
let desechables_ = "...";
let precio = 0;
let elementos = [platillo, ingredientePrincipal, bebida, botana, desechables_];

//obtener datos
async function obtenerDatos() {
  await Data();
  // obtener los datos
  let guardado = localStorage.getItem("datos");
  let datos = JSON.parse(guardado);

  platillo = datos[0].comidas.carne_asada;
  ingredientePrincipal = datos[0].comidas.carne_asada.arrachera;
  bebida = datos[0].bebidas.refresco;
  botana = datos[0].botanas.churros;
  desechables_ = datos[0].desechables.baratos;

  elementos = [platillo, ingredientePrincipal, bebida, botana, desechables_];
}

async function calcularPrecio() {
  await obtenerDatos();

  // calculamos precio
  elementos.forEach(item => {
    if("precio" in item){
      precio += item.precio;
    }
  });
}

calcularPrecio();

export default function EventsList() {
  const [estado, actualizarEstado] = useState();


  return (
    <div>
      <Card data={"16 Nov"} evento={platillo.id}></Card>
      <Card data={"Gasto estimado"} evento={precio}></Card>
      <Card data={"Personas"} evento={"25"}></Card>
      <Card data={"Costo por persona"} evento={"$45"}></Card>
      <Card data={"Comida principal"} evento={ingredientePrincipal.id}></Card>
      <Card data={"Bebida principal"} evento={bebida.id}></Card>
      <Card data={"Botana principal"} evento={botana.id}></Card>
      <Card data={"Desechables"} evento={desechables_.id}></Card>
      <Card evento={"Lista de compras"}></Card>
    </div>
  );
}

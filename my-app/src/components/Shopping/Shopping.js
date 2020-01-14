import React, {useEffect, useState} from "react";
import Checklist from "../Checklist/Checklist"
import IngredientsData from "../../data/ingredientes"

export default function EventsList(props) {

  const ingredientesData = IngredientsData;
  let evento = "";

  // Tengo que usar use state

  const [comida,setComida] = useState([]) 
  const [esenciales, setEsenciales] = useState([])
  const [bebidas, setBebidas] = useState([])
  const [botanas, setBotanas] = useState([])

 
  useEffect(()=>{
    //seteamos la comida y esenciales para el evento especifico, y poder mostrarlas en el shoplist
    evento = props.evento

    let ingredientes = ingredientesData.filter(item => item.id == evento)
    let bebidas = ingredientesData.filter(item => item.id == props.bebida)
    let botanas = ingredientesData.filter(item => item.id == props.botana)

    setComida(ingredientes[0].ingredientes)
    setEsenciales(ingredientes[0].esenciales)
    setBebidas(bebidas[0].ingredientes)
    setBotanas(botanas[0].ingredientes)
    
  }, [props.evento])

  return (
    <div>
        <Checklist title="Comida"  data={comida}   />
        <Checklist title="Bebidas" data={bebidas}/>
        <Checklist title="Esenciales" data={esenciales}/>
        <Checklist title="Botana" data={botanas}/>
    </div>
  );
}

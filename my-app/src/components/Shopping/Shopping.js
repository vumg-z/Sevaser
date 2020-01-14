import React, { useEffect, useState } from "react";
import Checklist from "../Checklist/Checklist";

export default function EventsList(props) {
  // playground

  // console.log(props.data)

  let evento = "";

  // Tengo que usar use state

  const [comida, setComida] = useState([]);
  const [esenciales, setEsenciales] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [botanas, setBotanas] = useState([]);

  useEffect(() => {
    //seteamos la comida y esenciales para el evento especifico, y poder mostrarlas en el shoplist
    evento = props.evento;

    // tengo que mandar un array SIEMPRE

    // let bebidas = ingredientesData.filter(item => item.id == props.bebida)
    // let botanas = ingredientesData.filter(item => item.id == props.botana)

    const eventoData = props.data.filter(item => item.nombre == evento);
    const bebidas = props.data.filter(item => item.nombre == props.bebida);
    const botana = props.data.filter(item => item.nombre == props.botana);

    if (eventoData != 0) {
      setComida(eventoData[0].ingredientes);
      setEsenciales(eventoData[0].esenciales);
      setBebidas(bebidas[0].ingredientes);
      setBotanas(botana[0].ingredientes);
    }

    // setEsenciales(ingredientes[0].esenciales)
  }, [props.evento, props.data]);

  return (
    <div>
      <Checklist title="Comida" data={comida} />
      <Checklist title="Bebidas" data={bebidas} />
      <Checklist title="Esenciales" data={esenciales} />
      <Checklist title="Botana" data={botanas} />
    </div>
  );
}

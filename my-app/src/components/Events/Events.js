import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

export default function EventsList(props) {

  

  if (props.data.length == 0) {
    return <div>loading</div>;
  } else {

    const dataClean = props.data.filter(item => item.tipo == "Fiesta")
    
    const components = dataClean.map(item => (
      <Card
        texto={item.nombre}
        key={item.id}
        tipo={item.tipo}
        action={props.handleClick}
        url={item.url}
        title={item.id}
        alt={item.id}
        index={1}
      />
    ));

    return <div>{components}</div>;
  }
}

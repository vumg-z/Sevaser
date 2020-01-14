import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

export default function EventsList(props) {


  if (props.data.length == 0) {
    return <div>loading</div>;
  } else {

<<<<<<< HEAD
    const components = props.data.map((item) => (
      <Card texto={item.nombre} key={item.id} tipo={item.tipo} action={props.handleClick} index={1}/>
    ))
=======
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
      />
    ));
>>>>>>> 8e6df28e5e1167e7033857c25665ef08cb36414c

    return <div>{components}</div>;
  }
}

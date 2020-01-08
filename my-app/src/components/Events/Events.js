import React, {useState, useEffect} from "react";
import Card from "../Card/Card";


export default function EventsList(props){



  if(props.data.length == 0){
    return (
      <div>
        loading
      </div>
    )
  }else{

    const components = props.data.map((item) => (
      <Card texto={item.nombre} key={item.id} tipo={item.tipo} action={props.handleClick} />
    ))

    return <div>{components}</div>;
  }
}

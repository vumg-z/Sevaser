import React from "react";
import {
    Card, CardImg, CardBody,
    CardTitle, 
  } from 'reactstrap';
import foto from './carneasada.png'
  
function CarneAsada() {
  return (
    <div>
    <Card>
      <CardImg src={foto} alt="Card image cap" />
      <CardBody>
        <CardTitle>Carne Asada</CardTitle>
      </CardBody>
    </Card>
  </div>
  );
}

export default CarneAsada;

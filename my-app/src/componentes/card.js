import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import carneasada from "./carneasada.png";


class CarneAsada extends React.Component {
  render() {
    return (
      <div>
        <Card>
          {/* <CardImg src={carneasada} alt="Card image cap" /> */}
          <CardBody>
            <CardTitle> {this.props.tipo}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CarneAsada;

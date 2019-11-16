import React from "react";
import "./App.css";
import Navbar from "./componentes/navbar";
import Card from "./componentes/card";

function App() {
  return (
    <header>
      <Navbar></Navbar>
      <Card tipo={'Carne Asada'}> </Card>
      <Card tipo={'Hamburgesas'}> </Card>
      <Card tipo={'Posada'}> </Card>
      <Card tipo={'Fiesta de Cumpleaños'}> </Card>
      <Card tipo={'Fiesta de Cumpleaños'}> </Card>
    </header>
  );
}

export default App;

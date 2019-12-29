import React from "react";
import TabBar from "../Tab/Tab";


localStorage.setItem("evento", "Carne Asada")

let guardado = localStorage.getItem("datos");
let datos = JSON.parse(guardado);
console.log(datos);

function App() {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <TabBar></TabBar>
    </div>
  );
}

export default App;

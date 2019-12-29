async function getData() {
  const response = await fetch("http://localhost:3000/api/datos", {
    mode: "cors"
  });
  const data = await response.json();
  
  // guardar los datos en un local storage
  localStorage.setItem("datos", JSON.stringify(data));

  return response;
}

export default getData;

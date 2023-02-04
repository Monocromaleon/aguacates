/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const urlBase = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app");
//web api

//Intl (api de internacionalizacion)
// 1 -- da formato a fechas
// 2 -- da formato a monedas
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
};

//conectarnos al server
window
  .fetch(`${urlBase}/api/avo`)
  //procesar la respesta y convertirla en JSON
  .then((respuesta) => respuesta.json())
  //JSON parasarla a DATA y renderizar la info en el browser
  .then((responseJSON) => {
    const todosLosItems = [];
    responseJSON.data.forEach((item) => {
      //create imagen
      const imagen = document.createElement("img");
      imagen.src = `${urlBase}${item.image}`;
      imagen.className = "img";
      //create titulo
      const title = document.createElement("h2");
      title.textContent = item.name;
      title.className = "title";
      //create precio;
      const price = document.createElement("div");
      price.className = "price";
      price.textContent = formatPrice(item.price);

      const container = document.createElement("div");
      container.className = "palta-container";
      container.append(imagen, title, price);
      document.body.appendChild(container);
      todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
  });

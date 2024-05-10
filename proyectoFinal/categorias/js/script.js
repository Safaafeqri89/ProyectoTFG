

import * as funciones from "./funciones.js";


document.addEventListener("DOMContentLoaded", function () {
  const carrito = document.getElementById("carrito");
  const listaproductos = document.getElementById("lista-productos");
  const listaCarrito = document.querySelector("#lista-carrito tbody");
  const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
  var productosEnCarrito = obtenerProductosLocalStorage() || [];
  obtenerCarritoYImprimirPagina();

  function obtenerCarritoYImprimirPagina() {
    imprimirdatosjson();
    listarCarrito();
  }

  listaproductos.addEventListener("click", function agregar(e) {
    if (e.target.classList.contains("agregar-carrito")) {
      const producto = e.target.parentElement.parentElement;
      const detallesProducto = obtenerInfoProducto(producto);
      insertarProducto(detallesProducto);
      listarCarrito();
      guardarProductosEnLocalStorage();
    }
  });

  function obtenerInfoProducto(producto) {
    return {
      imagen: producto.querySelector("img").src,
      titulo: producto.querySelector("h3").textContent,
      precio: producto.querySelector(".precio span").textContent,
      id: producto.querySelector("a").dataset.id,
    };
  }

  function insertarProducto(producto) {
    const productoExist = productosEnCarrito.find((item) => item.id === producto.id);
    if (productoExist) {
      productoExist.cantidad++;
    } else {
      producto.cantidad = 1;
      productosEnCarrito.push(producto);
    }
  }

  function listarCarrito() {
    borradoEficienteArbol(listaCarrito);
    productosEnCarrito.forEach((producto) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
                     <td><img src="${producto.imagen}"></td>
                      <td>${producto.titulo}</td>
                      <td>${producto.precio}</td>
                      <td class="cantidad">${producto.cantidad}</td>
                      <td><a href="#" class="borrar-producto" data-id="${producto.id}">X</a></td>
                    `;
      listaCarrito.appendChild(fila);
      guardarProductosEnLocalStorage();
    });
  }

  vaciarCarritoBtn.addEventListener("click", function vaciarCarrito() {
    borradoEficienteArbol(listaCarrito);
    productosEnCarrito = [];
    guardarProductosEnLocalStorage();
  });

  carrito.addEventListener("click", function eliminarProducto(e) {
    if (e.target.classList.contains("borrar-producto")) {
      e.target.parentElement.parentElement.remove();
      const productoId = e.target.dataset.id;
      productosEnCarrito = productosEnCarrito.filter((producto) => producto.id !== productoId);
      guardarProductosEnLocalStorage();
    }
  });

  function guardarProductosEnLocalStorage() {
    localStorage.setItem("productos", JSON.stringify(productosEnCarrito));
  }

  function obtenerProductosLocalStorage() {
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
});



function borradoEficienteArbol(nodoArbol) {
  while (nodoArbol.firstChild) {
    borradoEficienteArbol(nodoArbol.firstChild);
    nodoArbol.removeChild(nodoArbol.firstChild);
  }
}

function navigate() {
  window.location.href = "http://localhost/proyectoFinal/login/loginyregistro.html";
}

const buyButton = document.getElementById("procesar-pedido").addEventListener("click", function () {
  if (localStorage.getItem('user') == null) {
    alert("Debes iniciar sesión para poder comprar");
    navigate();
  }
});

async function imprimirdatosjson() {
  try {
    const response = await fetch("http://localhost/api/productos");
    if (!response.ok) {
      throw new Error(`¡Error HTTP! Estado: ${response.status}`);
    }
    const datosjson = await response.json();

    const listadoproductos = document.getElementById("lista-productos");
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    datosjson.forEach((producto, filas) => {
      var productoDiv = document.createElement("div");
      productoDiv.classList.add("four", "columns", "card");
      productoDiv.innerHTML = `
        <img src="http://localhost:/images/${producto.imagen}" class="imagen-producto" />
        <div class="info-card">
          <h3>${producto.nombre}</h3>
          <p class="texto">${producto.descripcion}</p>
          <p class="precio"><span class="precio-left">${producto.precio}$</span></p>
          <a href="#" class="button-primary button input agregar-carrito" data-id="${producto.id}">Contratar</a>
        </div>
      `;

      rowDiv.appendChild(productoDiv);

      // If we've reached the third product, add the row to the main container and reset it
      if ((filas + 1) % 3 === 0 || filas === datosjson.length - 1) {
        listadoproductos.appendChild(rowDiv);
        rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
      }
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}

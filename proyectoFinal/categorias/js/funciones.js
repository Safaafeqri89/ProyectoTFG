export { borradoEficienteArbol, imprimirdatosjson };

function borradoEficienteArbol(nodoArbol) {
  while (nodoArbol.firstChild) {
    borradoEficienteArbol(nodoArbol.firstChild);
    nodoArbol.removeChild(nodoArbol.firstChild);
  }
}

function navigate() {
  window.location.href = "http://127.0.0.1:5500/login/loginyregistro.html";
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

    const listadocursos = document.getElementById("lista-cursos");
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    datosjson.forEach((producto, filas) => {
      var cursoDiv = document.createElement("div");
      cursoDiv.classList.add("four", "columns", "card");
      cursoDiv.innerHTML = `
        <img src="http://localhost:/images/${producto.imagen}" class="imagen-curso u-full-width" />
        <div class="info-card">
          <h4>${producto.nombre}</h4>
          <p>${producto.descripcion}</p>
          <img src="img/estrellas.png"/>
          <p class="precio"><span class="u-pull-right">$${producto.precio}</span></p>
          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${producto.id}">Agregar Al Carrito</a>
        </div>
      `;

      rowDiv.appendChild(cursoDiv);

      // Si hemos llegado al tercer curso, agregar la fila al contenedor principal y reiniciarla
      if ((filas + 1) % 3 === 0 || filas === datosjson.length - 1) {
        listadocursos.appendChild(rowDiv);
        rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
      }
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  

 
//   function navigate() {
//     window.location.href = "http://localhost/proyectoFinal/login/loginyregistro.html";
// }

// const user = JSON.parse(localStorage.getItem("user"));

// if (!user || user.role !== "admin") {
//     navigate();
// } else if (user.username === "admin" && user.password === "admin") {
//     window.location.href = "http://localhost/proyectoFinal/admin/dashboard.html";
// }


  const modal = document.getElementById("productModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeButton = document.querySelector(".close-button");
  const addProductBtn = document.getElementById("addProductBtn");
  const categoryDropdown = document.getElementById("id_categoria");
  const productTable = document.getElementById("productTable");

  // Función para abrir el modal
  function openModalFunction() {
    modal.style.display = "flex";
  }

  // Función para cerrar el modal
  function closeModalFunction() {
    modal.style.display = "none";
  }

  // Evento para abrir el modal
  openModalBtn.addEventListener("click", openModalFunction);

  // Evento para cerrar el modal
  closeButton.addEventListener("click", closeModalFunction);

  // Cerrar el modal haciendo clic fuera de él
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModalFunction();
    }
  });

  // Función para obtener las categorías desde la API
  function fetchCategorias() {
    fetch("http://localhost:/api/categorias")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP! Estado: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const categorias = data.categoria;

        categorias.forEach((categoria) => {
          const option = document.createElement("option");
          option.value = categoria.id;
          option.textContent = categoria.nombre_categoria;
          categoryDropdown.appendChild(option);
        });
      })
      .catch((error) => {
        console.error("Error obteniendo categorías:", error);
      });
  }
  fetchCategorias();

  // Función para obtener y llenar la tabla de productos desde la API
  function fetchMostrarProductos() {
    fetch("http://localhost:/api/productos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP! Estado: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Registra el objeto de datos para inspeccionar su estructura

        // Verifica si el objeto de datos tiene una propiedad 'productos'
        const productos = Array.isArray(data) ? data : data.productos || [];

        productos.forEach((producto) => {
          const row = productTable.insertRow();

          // Inserta celdas
          const imageCell = row.insertCell(0);
          const nameCell = row.insertCell(1);
          const descriptionCell = row.insertCell(2);
          const priceCell = row.insertCell(3);
          const actionsCell = row.insertCell(4);

          // Llena las celdas con los datos del producto
          imageCell.innerHTML = `<img src="http://localhost:/images/${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: 50px;">`;
          nameCell.textContent = producto.nombre;
          descriptionCell.textContent = producto.descripcion;
          priceCell.textContent = producto.precio;

          // Agrega botones de editar y eliminar
          const editButton = document.createElement("button");
          editButton.classList.add("open-edit-mo");
          editButton.textContent = "Editar";
          editButton.addEventListener("click", () => editProduct(producto.id));

          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Eliminar";
          deleteButton.addEventListener("click", () =>
            deleteProduct(producto.id)
          );

          actionsCell.appendChild(editButton);
          actionsCell.appendChild(deleteButton);
        });
      })
      .catch((error) => {
        console.error("Error obteniendo productos:", error);
      });
  }
  fetchMostrarProductos();

  // Función para eliminar un producto usando la API
  function deleteProduct(productoId) {
    fetch(`http://localhost:/api/productos/${productoId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP! Estado: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // Función para agregar un producto usando la API
  function addProducto() {
    const imagen = document.getElementById("imagen").files[0];
    const name = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const category_id = document.getElementById("id_categoria").value;
    const precio = document.getElementById("precio").value;

    const formData = new FormData();
    formData.append("imagen", imagen);
    formData.append("nombre", name);
    formData.append("descripcion", descripcion);
    formData.append("id_categoria", category_id);
    formData.append("precio", precio);

    fetch("http://localhost:/api/productos", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP! Estado: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        closeModalFunction();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // Evento para agregar un producto
  addProductBtn.addEventListener("click", addProducto);

  // Función para obtener todas las categorías
 

  // Función para editar un producto
  function editProduct(productId) {
    fetchProductoById(productId);
    
    const editModal = document.getElementById("updateProductModal");
    const closeEditModalBtn = document.getElementById("closeUpdateModal");
    const updateProductBtn = document.getElementById("updateProductBtn");
    const editCategoryDropdown = document.getElementById("updateCategory_id");

    // Función para abrir el modal de edición
    function openEditModalFunction() {
      editModal.style.display = "flex";
    }

    // Función para cerrar el modal de edición
    function closeEditModalFunction() {
      document.getElementById("updateName").value =""
      document.getElementById("updateDescription").value =""
      document.getElementById("updatePrice").value =""
      document.getElementById("updateCategory_id").value = ""
      editModal.style.display = "none";

    }

    // Evento para abrir el modal de edición
    openEditModalFunction();

    // Evento para cerrar el modal de edición
    closeEditModalBtn.addEventListener("click", closeEditModalFunction);

    // Cerrar el modal de edición al hacer clic fuera de él
    window.addEventListener("click", function (event) {
      if (event.target === editModal) {
        closeEditModalFunction();
      }
    });

    function fetchAllCategorias() {
      fetch("http://localhost/api/categorias")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error HTTP! Estado: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const categorias = data.categoria;
          editCategoryDropdown.innerHTML =''
  
          categorias.forEach((categoria) => {
            const option = document.createElement("option");
            option.value = categoria.id;
            option.textContent = categoria.nombre_categoria;
            editCategoryDropdown.appendChild(option);
          });
        })
        .catch((error) => {
          console.error("Error obteniendo categorías:", error);
        });
    }
  
    fetchAllCategorias()

    // Función para obtener un producto por su ID
    function fetchProductoById(productId) {
      fetch(`http://localhost:/api/productos/show/${productId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error HTTP! Estado: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Llena el formulario con los datos del producto
          document.getElementById("updateName").value = data.producto.nombre;
          document.getElementById("updateDescription").value = data.producto.descripcion;
          document.getElementById("updatePrice").value = data.producto.precio;
          document.getElementById("updateCategory_id").value = data.producto.id_categoria;

          // Actualiza la visualización de la imagen
          const editImage = document.getElementById("updateImage");
          editImage.src = `http://localhost:/images/${data.imagen}`;
        })
        .catch((error) => {
          console.error("Error obteniendo producto:", error);
        });
    }

    function updateProducto() {
      const name = document.getElementById("updateName").value;
      const description = document.getElementById("updateDescription").value;
      const category_id = document.getElementById("updateCategory_id").value;
      const price = document.getElementById("updatePrice").value;
      const image = document.getElementById("updateImage").files[0]; // Obtener el archivo de imagen
    
      // Verificar si el nombre está vacío
      if (!name.trim()) {
        console.error("El nombre no puede estar vacío");
        return;
      }
    
      const formData = new FormData();
    
      formData.append("nombre", name);
      formData.append("descripcion", description);
      formData.append("id_categoria", category_id);
      formData.append("precio", price);
      formData.append("imagen",image)
      formData.append("_method","PUT")
    
      console.log(formData)
    
      
    
      fetch(`http://localhost:/api/productos/${productId}`, {
        method: "post",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error HTTP! Estado: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          closeEditModalFunction();
          location.reload() /*actualizar*/
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    
    // Evento para actualizar el producto
    updateProductBtn.addEventListener("click", updateProducto);
  }    
});

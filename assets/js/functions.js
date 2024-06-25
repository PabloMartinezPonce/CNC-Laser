var baseURL = "https://wonderful-coast-004ef5b10.3.azurestaticapps.net/assets/img/products/";

var categorias = [
    "Agendas grabadas",
    "Cajas personalizadas",
    "Cuadros",
    "Dia del padre",
    "Dia de la madre",
    "Dinosaurios en escala",
    "Figuras corte con vinil",
    "Juguetes",
    "Letreros",
    "Para eventos",
    "Pasteleria",
    "Retratos grabados",
    "Trabajos con luz led"
  ];
  
  var filterableButton = document.querySelector(".filterable-button");
  
  categorias.forEach(function(categoria) {
    var button = document.createElement("button");
    button.classList.add("btn", "btn-theme-outline");
    button.setAttribute("data-filter", "." + categoria.replace(/ /g, "-"));
  
    button.textContent = categoria;
  
    filterableButton.appendChild(button);
  });
  var productos = [];
  
  // Inicializar productos para cada categoría
  categorias.forEach(function(categoria) {
    productos.push({
      categoria: categoria,
      imagen: `${baseURL}${categoria}/producto1.jpeg`,
      titulo: `Agendas grabadas ${categoria}`,
      descripcion: `Descripción del Producto 1 de ${categoria}`
    });
  
    productos.push({
      categoria: categoria,
      imagen: `${baseURL}${categoria}/producto2.jpeg`,
      titulo: `Producto 2 de ${categoria}`,
      descripcion: `Descripción del Producto 2 de ${categoria}`
    });
  
    // Agrega más productos según sea necesario...
  });
  
    var productosContainer = document.getElementById("productosContainer");
  
    productos.forEach(function(producto) {
      var productoHTML = `
        <div class="grid-item ${producto.categoria.replace(/ /g, "-")} wow zoomIn">
          <div class="img-place" data-src="${producto.imagen}" data-fancybox data-caption="<h5 class='fg-theme'>${producto.titulo}</h5> <p>${producto.descripcion}</p>">
            <img src="${producto.imagen}" alt="" width="15%">
            <div class="img-caption">
              <h5 class="fg-theme">${producto.titulo}</h5>
              <p>${producto.descripcion}</p>
            </div>
          </div>
        </div>
      `;
      productosContainer.innerHTML += productoHTML;
    });
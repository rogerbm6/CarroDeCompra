//Array con objetos imágenes
let arrayObjetosImg = [];

let tuplas = document.getElementById('tuplas');

let precio_total = document.getElementById('precio_total');

let precioT = 0;

for (x = 0; x <= localStorage.length - 1; x++) {
  let clave = localStorage.key(x);
  let producto_local = JSON.parse(localStorage.getItem(clave));
  //document.write("La clave " + clave + "contiene el valor " + localStorage.getItem(clave) + "");
  let nombre = producto_local.nombre;
  let categoria = producto_local.categoria;
  let cantidad = producto_local.cantidad;
  let precio = producto_local.precio;
  let ruta = producto_local.ruta;
  //
  arrayObjetosImg.push(new Articulo(nombre, categoria, cantidad, precio, ruta));
}

arrayObjetosImg.forEach((imagen) => {
  let precioUnidad = imagen.getPrecio();
  let precioCantidad = imagen.getPrecio() * imagen.getCantidad();
  tuplas.insertAdjacentHTML("beforeBegin","<td>" + imagen.getNombre() + '</td><td>' + imagen.getCategoria() + '</td><td>' + imagen.getCantidad() + '</td><td>' + (precioCantidad) + '</td><td><button type="button" class="btn btn-outline-danger" id="' + imagen.getNombre() + '">Eliminar</button></td>');
  precioT += precioCantidad;

  document.getElementById(imagen.getNombre()).addEventListener('click', function() {
    localStorage.removeItem(imagen.getNombre());
    location.reload();
  })
});

document.getElementById('eliminar_todo').addEventListener('click', function() {
  localStorage.clear();
  location.reload();
});

precio_total.innerHTML = precioT;

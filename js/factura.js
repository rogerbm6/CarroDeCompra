//Array con objetos imágenes
let arrayObjetosImg = [];

//Elemento del HTML, tabla para mostrar los objetos a comprar
let tuplas = document.getElementById('tuplas');

//Elemento del HTML, columna donde mostrar el precio total
let precio_total = document.getElementById('precio_total');

//Variable con el precio total de la compra
let precioT = 0;

//Bucle para rescatar todos los datos del localStorage
for (x = 0; x <= localStorage.length - 1; x++) {
  let clave = localStorage.key(x);
  let producto_local = JSON.parse(localStorage.getItem(clave));
  let nombre = producto_local.nombre;
  let categoria = producto_local.categoria;
  let cantidad = producto_local.cantidad;
  let precio = producto_local.precio;
  let ruta = producto_local.ruta;
  arrayObjetosImg.push(new Articulo(nombre, categoria, cantidad, precio, ruta));
}

//Bucle para mostrar los datos del localStorage en la tabla
arrayObjetosImg.forEach((imagen) => {
  let precioUnidad = imagen.getPrecio();
  let precioCantidad = imagen.getPrecio() * imagen.getCantidad();
  tuplas.insertAdjacentHTML("beforeBegin", '<td><img style="width:100px;" class="img-fluid" src=' + imagen.getRuta() + '></td><td>' + imagen.getNombre() + '</td><td>' + imagen.getCategoria() + '</td><td>' + imagen.getCantidad() + '</td><td>' + (precioCantidad) + '</td>');
  precioT += precioCantidad;
});

//Mostrar valor del precio total
precio_total.innerHTML = precioT;

//Botón para limpiar el localStorage
document.getElementById('volver').addEventListener('click', function() {
  localStorage.clear();
})

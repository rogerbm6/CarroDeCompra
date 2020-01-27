//Array con imágenes del HTML
let arrayImg = document.getElementsByTagName('img');

//Array con objetos imágenes
let arrayObjetosImg = [];

//Creación de los objetos articulo
for (let i = 0; i < --arrayImg.length; i++) {
  //Obtención de toda la información de las imágenes almacenada en los alt
  let alt = arrayImg[i].alt.split(';');
  let rutaM = arrayImg[i].src.split('/');
  let rutaB = './' + rutaM[rutaM.length - 2] + '/' + rutaM[rutaM.length - 1];
  arrayObjetosImg.push(new Articulo(alt[0], alt[1], 1, alt[2], rutaB));

  //Eventos en las imágenes
  arrayImg[i].addEventListener('click', function() {
    //Ventana emergente para confirmar el añadido al carro
    let men = confirm('¿Quieres añadirlo al carro?');

    //Condicional para introducir al carro
    if (men) {
      //Creación de JSON
      let objeto = {
        'nombre': arrayObjetosImg[i].getNombre(),
        'categoria': arrayObjetosImg[i].getCategoria(),
        'cantidad': arrayObjetosImg[i].getCantidad(),
        'precio': arrayObjetosImg[i].getPrecio(),
        'ruta': arrayObjetosImg[i].getRuta()
      };

      //Condicional para comprobar si se añade más de un mismo producto
      if (localStorage.getItem(arrayObjetosImg[i].getNombre())) {
        let prueba = JSON.parse(localStorage.getItem(arrayObjetosImg[i].getNombre()));
        //Aumenta la cantidad del producto seleccionado
        let cantidad = prueba.cantidad;
        let objeto2 = {
          'nombre': arrayObjetosImg[i].getNombre(),
          'categoria': arrayObjetosImg[i].getCategoria(),
          'cantidad': ++cantidad,
          'precio': arrayObjetosImg[i].getPrecio(),
          'ruta': arrayObjetosImg[i].getRuta()
        };
        localStorage.setItem(prueba.nombre, JSON.stringify(objeto2));
      } else {
        localStorage.setItem(arrayObjetosImg[i].getNombre(), JSON.stringify(objeto));
      }
    }
  });
}

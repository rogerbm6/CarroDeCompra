//Recogemos todas las imágenes
let arrayImg = document.getElementsByTagName('img');

//Array con objetos imágenes
let arrayObjetosImg = [];

//Creación de los objetos articulo
for (let i = 0; i < --arrayImg.length; i++) {
  let alt = arrayImg[i].alt.split(';'); //array con informamción del producto recuperada del atributo alt
  let rutaM = arrayImg[i].src.split('/');
  let rutaB = './' + rutaM[rutaM.length - 2] + '/' + rutaM[rutaM.length - 1];
  arrayObjetosImg.push(new Articulo(alt[0], alt[1], 1, alt[2], rutaB));

  //Añadimos eventos a las imágenes
  arrayImg[i].addEventListener('click', function() {
    let objeto = {
      'nombre': arrayObjetosImg[i].getNombre(),
      'categoria': arrayObjetosImg[i].getCategoria(),
      'cantidad': arrayObjetosImg[i].getCantidad(),
      'precio': arrayObjetosImg[i].getPrecio(),
      'ruta': arrayObjetosImg[i].getRuta()
    };

    if (localStorage.getItem(arrayObjetosImg[i].getNombre())) {
      let prueba = JSON.parse(localStorage.getItem(arrayObjetosImg[i].getNombre()));
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
  });
}

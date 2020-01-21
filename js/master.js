class articulo {
  constructor(nombre = '', categoria = '', cantidad = 0, precio = 0, ruta = '') {
    this.nombre = nombre;
    this.categoria = categoria;
    this.cantidad = cantidad;
    this.precio = precio;
    this.ruta = ruta;
  }

  getNombre() {
    return this.nombre;
  }

  getCategoria() {
    return this.categoria;
  }

  getCantidad() {
    return this.cantidad;
  }

  getPrecio() {
    return this.precio;
  }

  getRuta() {
    return this.ruta;
  }
}

//Recogemos todas las imágenes
let arrayImg = document.getElementsByTagName('img');

//Array con objetos imágenes
let arrayObjetosImg = [];

//Creación de los objetos articulo
for (let i = 0; i < --arrayImg.length; i++) {
  let alt = arrayImg[i].alt.split(';'); //array con informamción del producto recuperada del atributo alt
  let rutaM = arrayImg[i].src.split('/');
  let rutaB = './' + rutaM[rutaM.length - 2] + '/' + rutaM[rutaM.length - 1];
  arrayObjetosImg.push(new articulo(alt[0], alt[1], 1, alt[2], rutaB));

  //Añadimos eventos a las imágenes
  arrayImg[i].addEventListener('click', function(){
    console.log(arrayObjetosImg[i]);
    let objeto = {'nombre':arrayObjetosImg[i].getNombre(), 'categoria':arrayObjetosImg[i].getCategoria(), 'cantidad':arrayObjetosImg[i].getCantidad(),'precio':arrayObjetosImg[i].getPrecio(),
    'ruta':arrayObjetosImg[i].getRuta()};

    localStorage.setItem('testObject', JSON.stringify(objeto));
  });
}

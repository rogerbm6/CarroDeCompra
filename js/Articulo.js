class Articulo {
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

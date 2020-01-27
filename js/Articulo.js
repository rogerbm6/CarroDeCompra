// Clase Articulo
class Articulo {

  /**
   * constructor de la clase Articulo
   * @param {String} [nombre='']
   * @param {String} [categoria='']
   * @param {Number} [cantidad=0]
   * @param {Number} [precio=0]
   * @param {String} [ruta='']
   */
  constructor(nombre = '', categoria = '', cantidad = 0, precio = 0, ruta = '') {
    this.nombre = nombre;
    this.categoria = categoria;
    this.cantidad = cantidad;
    this.precio = precio;
    this.ruta = ruta;
  }

  /**
   * Getter getNombre
   * @return {String} [nombre]
   */
  getNombre() {
    return this.nombre;
  }

  /**
   * Getter getCategoria
   * @return {String} [categoria]
   */
  getCategoria() {
    return this.categoria;
  }

  /**
   * Getter getCantidad
   * @return {Number} [cantidad]
   */
  getCantidad() {
    return this.cantidad;
  }

  /**
   * Getter getPrecio
   * @return {Number} [precio]
   */
  getPrecio() {
    return this.precio;
  }

  /**
   * Getter getRuta
   * @return {String} [ruta]
   */
  getRuta() {
    return this.ruta;
  }
}

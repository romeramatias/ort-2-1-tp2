import PrestamoPersonal from './PrestamoPersonal'
import {PrestamoPrendario} from './PrestamoPrendario'
import {PrestamoInmobiliario} from './PrestamoInmobiliario'

let prestamo = new PrestamoPersonal();
let prestamoPrendario = new PrestamoPrendario(prestamo);
let prestamoInmobiliario = new PrestamoInmobiliario(prestamoPrendario);

console.log(prestamo.getInfo());
console.log(prestamoPrendario.getInfo());
console.log(prestamoInmobiliario.getInfo());

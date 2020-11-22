import PrestamoDecorator from "./PrestamoDecorator";

export class PrestamoInmobiliario extends PrestamoDecorator {
   getInfo(): string {
      return this.prestamo.getInfo() + " con un Prestamo Inmobiliario";
   }
}

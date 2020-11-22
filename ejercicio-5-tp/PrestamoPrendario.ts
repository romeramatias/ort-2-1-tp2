import PrestamoDecorator from "./PrestamoDecorator";

export class PrestamoPrendario extends PrestamoDecorator {
   getInfo(): string {
      return this.prestamo.getInfo() + " con un Prestamo Prendario";
   }
}

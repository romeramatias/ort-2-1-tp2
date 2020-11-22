import { Prestamo } from "./Prestamo";

export default abstract class PrestamoDecorator implements Prestamo {
   protected prestamo: Prestamo;

   constructor(prestamo: Prestamo) {
      this.prestamo = prestamo;
   }

   getInfo(): string {
      return this.prestamo.getInfo();
   }
}

import { Prestamo } from "./Prestamo";

export default class PrestamoPersonal implements Prestamo {
   getInfo(): string {
      return "Soy un Prestamo Personal";
   }
}

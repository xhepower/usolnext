interface errorPageProps {
  error: Error;
  reset: () => void;
}
interface loginProps {
  email: string;
  password: string;
}
interface payInterface {
  sub: number;
  role: string;
}
interface UsersContainerProps {
  users: User[] | User;
  role: string;
}
export interface User {
  id: number;
  email: string;
  password: string;
  role: string;
  recoveryToken?: string;
  rutas: Ruta[];
}

export interface Ruta {
  id: number;
  name: string;
  clientes: Cliente[];
}

export interface Cliente {
  id: number;
  name: string;
  dni: string;
  city?: string;
  hood?: string;
  business?: string;
  phone1?: string;
  phone2?: string;
  prestamos: Prestamo[];
}

export interface Prestamo {
  id: number;
  inicio: Date;
  vencimiento: Date;
  capital: number;
  porcentaje: number;
  porcentajemora?: number;
  cuota?: number;
  intereses?: number;
  mora?: number;
  total?: number;
  saldo?: number;
  estado?: string;
  frecuencia?: string;
  proxima?: Date;
  pagos: Pago[];
}

export interface Pago {
  id: number;
  monto: string;
  saldoAnterior: number;
  saldoActual: number;
  fecha: Date;
}

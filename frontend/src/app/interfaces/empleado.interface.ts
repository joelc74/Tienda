export interface Empleado {
  id: number;
  nombre: string;
  apellido: string;
  tipo_empleado: string;
  email: string;
  telefono: string;
  imagenUrl?: string; // 👈 propiedad opcional (puede no venir del backend)
}

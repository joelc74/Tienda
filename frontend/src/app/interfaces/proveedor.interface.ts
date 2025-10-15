export interface Proveedor {
  id: number;
  nombre: string;
  cif: string;
  direccion: string;
  email: string;
  telefono: string;
  imagenUrl?: string; // 👈 propiedad opcional (puede no venir del backend)
}

export interface Tienda {
  id: number;
  nombre: string;
  direccion: string;
  email: string;
  telefono: string;
  imagenUrl?: string; // 👈 propiedad opcional (puede no venir del backend)
}


export interface Tienda {
  id: number;
  nombre: string;
  direccion: string;
  email: string;
  telefono: string;
  filename?: string; // ✅ Añadido
}


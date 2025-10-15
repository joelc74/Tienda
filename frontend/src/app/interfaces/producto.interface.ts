import { DecimalDataType } from "sequelize";

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio_venta: string;
  precio_compra: string;
  imagenUrl?: string; // 👈 propiedad opcional (puede no venir del backend)
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from '../interfaces/tienda.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl = 'http://localhost:8080/api/tienda';

  constructor(private http: HttpClient) { }

  /** 🟢 Obtener todas las tiendas */
  getStore(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(this.apiUrl);
  }

  /** 🔍 Buscar tienda por nombre */
  searchByName(nombre: string): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(`${this.apiUrl}?name=${encodeURIComponent(nombre)}`);
  }

  /** 🟢 Alias: crear tienda usando FormData directamente */
  addStore(formData: FormData): Observable<Tienda> {
    return this.http.post<Tienda>(this.apiUrl, formData);
  }

  /** ➕ Crear una nueva tienda */
  createStore(store: any, image?: File): Observable<Tienda> {
    const formData = new FormData();
    formData.append('nombre', store.nombre);
    formData.append('direccion', store.direccion);
    formData.append('email', store.email);
    formData.append('telefono', store.telefono);

    if (image) {
      formData.append('file', image, image.name);
    }

    return this.http.post<Tienda>(this.apiUrl, formData);
  }

  /** 🧾 Obtener tienda por ID */
  getStoreById(id: number): Observable<Tienda> {
    return this.http.get<Tienda>(`${this.apiUrl}/${id}`);
  }

  /** ✏️ Actualizar tienda */
  editStore(id: number, store: any, image?: File): Observable<Tienda> {
    const formData = new FormData();
    formData.append('nombre', store.nombre);
    formData.append('direccion', store.direccion);
    formData.append('email', store.email);
    formData.append('telefono', store.telefono);

    if (image) {
      formData.append('file', image, image.name);
    }

    return this.http.put<Tienda>(`${this.apiUrl}/${id}`, formData);
  }

  /** ❌ Eliminar una tienda */
  deleteStore(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  /** 🧨 Eliminar todas las tiendas */
  deleteAllStores(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }
}

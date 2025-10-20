import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from '../interfaces/tienda.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Obtener todas las tiendas

  getStore(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(`${this.apiUrl}/tienda`);
  }

  // Buscar Tienda por nombre



  searchByName(nombre: string): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(`${this.apiUrl}/tienda?name=${encodeURIComponent(nombre)}`);
  }

  // Crear una nueva Tienda

   addStore(formData: FormData): Observable<Tienda> {
    return this.http.post<Tienda>(`${this.apiUrl}/tienda`, formData);
  }


  // Obtener una tienda por ID
  getStoreById(id: number): Observable<Tienda> {
    return this.http.get<Tienda>(`${this.apiUrl}/tienda/${id}`);
  }

  // Actualizar una Tienda por ID
  editStore(id: number, formData: FormData): Observable<Tienda> {
    return this.http.put<Tienda>(`${this.apiUrl}/tienda/${id}`, formData);
  }

  // Eliminar una tienda por ID
   deleteStore(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tienda/${id}`);
  }

  // Eliminar todas las tiendas
  deleteAllStore(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tienda`);
  }

    createStore(store: any, image?: Blob): Observable<any> {
    const formData = new FormData();
    formData.append('nombre', store.nombre);
    formData.append('direccion', store.direccion);
    formData.append('email', store.email);
    formData.append('telefono', store.telefono);

    if (image) {
      formData.append('file', image, 'store-image.jpg');
    }

    return this.http.post(`${this.apiUrl}/tienda`, formData);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from '../interfaces/tienda.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  endpoint = 'http://localhost:8080/api/tienda';// Endpoint para Tienda

  constructor(private httpClient: HttpClient) { }

  // Obtener todas las tiendas

  getStore(): Observable<Tienda[]> {
    return this.httpClient.get<Tienda[]>(this.endpoint);
  }

  // Buscar Tienda por nombre

  searchByName(nombre: string): Observable<Tienda[]> {
    return this.httpClient.get<Tienda[]>(`${this.endpoint}?name=${encodeURIComponent(nombre)}`);
  }

  // Crear una nueva Tienda

  addStore(tienda: Tienda): Observable<Tienda> {
    return this.httpClient.post<Tienda>(this.endpoint, tienda, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }


  // Obtener una tienda por ID
  getStoreById(id: number): Observable<Tienda> {
    return this.httpClient.get<Tienda>(`${this.endpoint}/${id}`);
  }

  // Actualizar una Tienda por ID
  editStore(id: number, tienda: Tienda): Observable<Tienda> {
    return this.httpClient.put<Tienda>(`${this.endpoint}/${id}`, tienda, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Eliminar una tienda por ID
  deleteStore(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  // Eliminar todas las tiendas
  deleteAllStore(): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}`);
  }


}

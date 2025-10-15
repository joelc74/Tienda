import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../interfaces/proveedor.interface';

@Injectable({
  providedIn: 'root'
})
export class SuplierService {
  endpoint = 'http://localhost:8080/api/proveedor';// Endpoint para Proveedor

  constructor(private httpClient: HttpClient) { }

  // Obtener todas los proveedores

  getSuplier(): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(this.endpoint);
  }

  // Buscar Proveedor por nombre

  searchByName(nombre: string): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(`${this.endpoint}?name=${encodeURIComponent(nombre)}`);
  }

  // Crear un nuevo Proveedor

  addSuplier(proveedor: Proveedor): Observable<Proveedor> {
    return this.httpClient.post<Proveedor>(this.endpoint, proveedor, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }


  // Obtener un Proveedor por ID
  getSuplierById(id: number): Observable<Proveedor> {
    return this.httpClient.get<Proveedor>(`${this.endpoint}/${id}`);
  }

  // Actualizar un Proveedor por ID
  editSuplier(id: number, proveedor: Proveedor): Observable<Proveedor> {
    return this.httpClient.put<Proveedor>(`${this.endpoint}/${id}`, proveedor, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Eliminar un Proveedor por ID
  deleteSuplier(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  // Eliminar todos los Proveedores
  deleteAllSuplier(): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}`);
  }


}

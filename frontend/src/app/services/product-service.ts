import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint = 'http://localhost:8080/api/producto';// Endpoint para Producto

  constructor(private httpClient: HttpClient) { }

  // Obtener todos los Productos

  getProduct(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.endpoint);
  }

  // Buscar Producto por nombre

  searchByName(nombre: string): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.endpoint}?name=${encodeURIComponent(nombre)}`);
  }

  // Crear un nuevo Producto

  addProduct(producto: Producto): Observable<Producto> {
    return this.httpClient.post<Producto>(this.endpoint, producto, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }


  // Obtener un Producto por ID
  getProductById(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.endpoint}/${id}`);
  }

  // Actualizar un Producto por ID
  editProduct(id: number, producto: Producto): Observable<Producto> {
    return this.httpClient.put<Producto>(`${this.endpoint}/${id}`, producto, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Eliminar un Producto por ID
  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  // Eliminar todos los Productos
  deleteAllProduct(): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}`);
  }


}

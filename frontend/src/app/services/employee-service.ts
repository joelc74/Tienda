import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  endpoint = 'http://localhost:8080/api/empleado';// Endpoint para Empleado

  constructor(private httpClient: HttpClient) { }

  // Obtener todos los Empleados

  getEmployee(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.endpoint);
  }

  // Buscar Empleado por nombre

  searchByName(nombre: string): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.endpoint}?name=${encodeURIComponent(nombre)}`);
  }

  // Crear un nuevo Empleado

  addEmployee(empleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>(this.endpoint, empleado, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }


  // Obtener un Empleado por ID
  getEmployeeById(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.endpoint}/${id}`);
  }

  // Actualizar un Empleado por ID
  editEmployee(id: number, empleado: Empleado): Observable<Empleado> {
    return this.httpClient.put<Empleado>(`${this.endpoint}/${id}`, empleado, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Eliminar un Empleado por ID
  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  // Eliminar todos los Empleados
  deleteAllEmployee(): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}`);
  }


}

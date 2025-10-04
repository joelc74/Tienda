import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  endpoint: string = 'http://localhost:8080/api/TIENDA';

  constructor (private httpClient:HttpClient) {}

  getAllStore(){
    return this.httpClient.get(this.endpoint);
  }

}

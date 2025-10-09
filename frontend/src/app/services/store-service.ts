import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  endpoint: string = 'http://localhost:8080/api/tiendas';

  constructor (private httpClient:HttpClient) {}

  getAllStore(){
    return this.httpClient.get(this.endpoint);
  }


  create(store: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });


    const body = new URLSearchParams();
    body.append("storeBrand",store.storeBrand);
    body.append("storeModel", store.storeModel);
    return this.httpClient.post(this.endpoint,body.toString(),{headers});
  }

}

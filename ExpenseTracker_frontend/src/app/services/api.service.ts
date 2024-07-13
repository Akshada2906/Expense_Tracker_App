import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL:String = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  // getProducts() {
  //   return this.http.get('https://fakestoreapi.com/products');
  // }

  signup(obj:any){
    return this.http.post(`${this.baseURL}/users/signup`, obj)
  }
}




import { Injectable } from '@angular/core';
import { Product } from '../interfaces/store.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  /* getProducts(): Observable <Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  } */

  getProductById( id: string): Observable <Product>{
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  } 

  getSuggestions( query: string ): Observable<Product[]> {
    return this.http.get<Product[]>(`${ this.baseUrl }/products/${query}`);
  }

  getProducts(page: number, pageSize: number): Observable<Product[]> {
    const url = `${this.baseUrl}/products?limit=${page}&offset=${pageSize}`;
    return this.http.get<Product[]>(url);
    
  }
  getDelete(id: string): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }/products/${id}`)
  }
  getEdit(product:Product): Observable<Product>{
    return  this.http.put<Product> (`${ this.baseUrl }/products`, product)
  }


}



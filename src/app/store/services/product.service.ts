import { Injectable } from '@angular/core';
import { Product } from '../interfaces/store.interface';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { RegisterResponse } from 'src/app/auth/interface/registerResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environment.baseUrl;
  private authToken!: string;

  setAuthToken(token: string) {
    this.authToken = token;
  }

  constructor( private http: HttpClient ) { }

  getProductById( id: string): Observable <Product>{
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  } 

  getSuggestions( query: string ): Observable<Product[]> {
    return this.http.get<Product[]>(`${ this.baseUrl }/products/${query}`);
  }

  getProducts(page: number, pageSize: number): Observable<Product[]> {
    const url = `${this.baseUrl}/products?limit=${pageSize}&offset=${page}`;
    console.log(url)
    return this.http.get<Product[]>(url);  
  }

  deleteProduct(id: string): Observable<any>{
    const url = `${this.baseUrl}/products/${id}`;
    const signedToken = localStorage.getItem('token');

    if (signedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${signedToken}`,
      });
  
    return this.http.delete<any>(url, {headers});
  }else{
    return throwError("No se encontró un token de autenticación en el almacenamiento local.");
  }
}
  editProduct(id:string): Observable<Product>{
    const url = `${this.baseUrl}/products/${id}`;
    const signedToken = localStorage.getItem('token');
    if (signedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${signedToken}`,
      });
    return  this.http.patch<Product>(url, {headers});
  }else{
    return throwError("No se encontró un token de autenticación en el almacenamiento local.");
  }
}

  newProduct(product: Product): Observable<RegisterResponse> {
    const url = `${this.baseUrl}/products/createItem`;
    const signedToken = localStorage.getItem('token');
  
    if (signedToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${signedToken}`,
      });
      return this.http.post<RegisterResponse>(url, product, { headers });
    } else {
      
      return throwError("No se encontró un token de autenticación en el almacenamiento local.");
    }
    }
  }
  



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: string = environment.baseUrl; 

constructor(private http: HttpClient) { }

findAll(): Observable < Categoria[] > {
  const url = `${this.baseUrl}/categorias`;
  return this.http.get<Categoria[]>(url);
}
}

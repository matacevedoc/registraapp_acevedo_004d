// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users, User } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  GetAllUsers():Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios`);
  }


  GetUserById(codigo: any): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }

  IsLoggedIn() {
    return sessionStorage.getItem('username') != null;
  }

  GetUserrole() {
    return sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole')?.toString() : '';
  }

  IsExiste() {
    return this.IsLoggedIn();
  }


  CrearUsuario(newUsuario: User): Observable<Users> {
    return this.httpClient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  BuscarUsuarioId(id:number):Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?id=${id}`);
  }

  ActualizarUsuario(usuario: any): Observable<Users> {
    return this.httpClient.put<Users>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }
}









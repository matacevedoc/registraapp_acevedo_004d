import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiCrudService } from 'src/app/services/apicrud.service';
import { Observable } from 'rxjs';
import { Users } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {
  usuario = {
    id:0,
    username: '',
    role:'',
    password:'', 
    isactive: false
  }
  constructor(private apiCrud: ApiCrudService, 
              private authService: AuthService,
              private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }
  
  getUsuarioById(usuarioID:number){
    this.authService.BuscarUsuarioId(usuarioID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.usuario={
          id: resp[0].id,
          username: resp[0].username,
          role: resp[0].role,
          password: resp[0].password,
          isactive: resp[0].isactive
        }
      }
    )
  }
  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }
  EliminarUsuario(id: number): Observable<Users> {
    return this.httpClient.delete<Users>(`${environment.apiUrl}/usuarios/${id}`);
  }
}

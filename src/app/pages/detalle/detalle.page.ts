import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/services/apicrud.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  usuario = {
    id:0,
    username: '',
    role:'',
    password:'', 
    isactive: false
  }
  constructor(private apiCrud: ApiCrudService, 
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
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

}
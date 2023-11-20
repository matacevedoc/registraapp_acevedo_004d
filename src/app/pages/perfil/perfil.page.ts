import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre: any;
  userrole: any;
  isactive: any;


  usuario = {
    id:0,
    username: '',
    role:'',
    password:'', 
    isactive: false
  }
  constructor(private menuController:MenuController,
              private authService: AuthService,
              private router: Router,
              private alertcontroller: AlertController) { 
                this.nombre= sessionStorage.getItem('username');
                this.userrole= sessionStorage.getItem('userrole');
                this.isactive= sessionStorage.getItem('isactive');
              }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.GetUserById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  GetUserById(usuarioID:number){
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
  mostrarMenu(){
    this.menuController.open('first');
  }

  

}

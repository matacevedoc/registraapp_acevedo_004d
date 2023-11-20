import { Component, OnInit } from '@angular/core';
import { Users } from '../../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuarios:Users[]=[];
  numero : any;
  nombre: any;

  constructor(
              private alertcontroller: AlertController,
              private menuController: MenuController,
              private router: Router) { 
                this.nombre= sessionStorage.getItem('username');
              }

  ngOnInit() {
  }
 
  mostrarMenu(){
    this.menuController.open('first');
  }
  cerrarSesion(){
    sessionStorage.clear();
    this.mensajeCerrar();
    this.router.navigateByUrl('/inicio');
  }

  async mensajeCerrar(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Cerrando Sesion...',
      message : 'Hasta la próxima!',
      buttons : ['OK']
    })
    alerta.present();
  }

}

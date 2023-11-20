import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/services/apicrud.service';
import { AlertController } from '@ionic/angular';
import { IPalabra } from '../../interfaces/interfaces'
import { MenuController } from '@ionic/angular';
import { format } from 'path';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})

export class QrPage implements OnInit {

  public mensaje:string;

  data={
    texto:''
  }
  nombre: any;

  newPalabra:IPalabra={
    username:'',
    palabra: ''
  }
  
  //npm install -D @types/qrcode --save
  constructor(private alertcontroller: AlertController, 
              private apicrudservice: ApiCrudService,
              private menuController: MenuController,) {
    this.mensaje='Duoc UC Maipú';
    this.nombre= sessionStorage.getItem('username');
   }

  ngOnInit() {
  }

  generarQr(){
    this.mensaje = this.data.texto;
    this.newPalabra.username=this.nombre;
    this.newPalabra.palabra=this.mensaje;
    this.apicrudservice.CrearPalabra(this.newPalabra).subscribe();
    this.mostrarMensaje();
    this.data.texto='';
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header:'Creando Palabra',
      message: 'Su QR ha sido Almacenado',
      buttons: ['Ok']
    })
    alerta.present();
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

}

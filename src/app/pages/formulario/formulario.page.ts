import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { User } from '../../interfaces/interfaces';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  userdata: any;
  
  usuario : User={
    username:'',
    password:'',
    role:'',
    isactive:false
  }

  registroForm: FormGroup;


  constructor(private alertController: AlertController,
              private authservice: AuthService,
              private router: Router,
              private FBuilder: FormBuilder) {
                this.registroForm=this.FBuilder.group({
                  'username' : new FormControl("", [Validators.required, Validators.minLength(3)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(3)]),
                  'rol': new FormControl("", Validators.required)
                })
               }

  ngOnInit() {
  }
  
  registrarUsuario(){
    if (this.registroForm.valid){
      //implementar que el usuario no se repita, en caso que ya existe enviar un mensaje
      this.authservice.BuscarUsuarioId(this.registroForm.value.username).subscribe(resp=>{
        this.userdata = resp; 
        if(this.userdata.length>0){
           this.registroForm.reset();
          this.errorDuplicidad();
        }
        else{
          this.usuario.username = this.registroForm.value.username;
          this.usuario.password = this.registroForm.value.password;
          this.usuario.role = this.registroForm.value.rol;
          this.usuario.isactive=true;
          this.authservice.CrearUsuario(this.usuario).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/login');
        }
      })
    }
  }

  async mostrarMensaje(){
    const alerta = await this.alertController.create({
      header: '¡Usuario creado!',
      message: 'Bienvenid@, ' + this.usuario.username,
      buttons: ['OK']
    });
    alerta.present();
  }

  async errorDuplicidad(){
    const alerta = await this.alertController.create({
      header: 'Oh No...',
      message: 'Su usuario '+ this.usuario.username + ' ya se encuentra registrado',
      buttons: ['OK']
    });
    alerta.present();
  }


}

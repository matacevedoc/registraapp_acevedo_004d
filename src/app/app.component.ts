import { Component } from '@angular/core';


interface Componente{
  name: string;
  icon: string;
  redirecTo: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes: Componente[]=[
    {
      name:'Inicio',
      icon:'id-card-outline',
      redirecTo:'/inicio'
    },
    {
    name:'¿Quiénes Somos?',
      icon:'help-circle-outline',
      redirecTo:'/quienessomos'
    },
    {
      name:'feriados considerados',
      icon:'calendar-number-outline',
      redirecTo:'/fechasfer'
    },

    
  ]
}

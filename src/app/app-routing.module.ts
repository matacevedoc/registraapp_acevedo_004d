import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'iniciosesion',
    loadChildren: () => import('./pages/iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 'quienessomos',
    loadChildren: () => import('./pages/quienessomos/quienessomos.module').then( m => m.QuienessomosPageModule)
  },
  {
    path: 'fechasfer',
    loadChildren: () => import('./pages/fechasfer/fechasfer.module').then( m => m.FechasferPageModule)
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./pages/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./pages/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'actperfil/:id',
    loadChildren: () => import('./pages/actperfil/actperfil.module').then( m => m.ActperfilPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
    canActivate: [AutorizadoGuard]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

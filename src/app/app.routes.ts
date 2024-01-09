import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/usuarios/usuarios.module').then( m => m.UsuariosModule ),
  }
];

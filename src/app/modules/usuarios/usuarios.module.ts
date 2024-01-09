import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponentRoutingModule } from '../../components/tabla-usuarios/tabla-usuarios-routing.module';
import { TablaUsuariosComponent } from '../../components/tabla-usuarios/tabla-usuarios.component';



@NgModule({
  declarations: [TablaUsuariosComponent],
  imports: [
    CommonModule,
    TablaUsuariosComponentRoutingModule,
  ]
})
export class UsuariosModule { }

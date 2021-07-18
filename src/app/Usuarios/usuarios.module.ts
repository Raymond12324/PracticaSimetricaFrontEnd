import { MaterialModule } from './../MatModules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './usuario.component';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    UsuarioComponent
  ],
  exports:[
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class UsuariosModule { }

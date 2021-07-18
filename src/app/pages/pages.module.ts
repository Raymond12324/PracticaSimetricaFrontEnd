import { RolesModule } from './../Roles/roles.module';
import { UsuariosModule } from '../Usuarios/usuarios.module';

//modulos importados
import { MaterialModule } from './../MatModules/material.module';
import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  exports:[
    PagesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    UsuariosModule,
    RolesModule
  ]
})
export class PagesModule { }

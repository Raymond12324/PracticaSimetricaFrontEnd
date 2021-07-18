import { MaterialModule } from './../MatModules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { ListaRolesComponent } from './components/lista-roles/lista-roles.component';



@NgModule({
  declarations: [
    RolesComponent,
    ListaRolesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class RolesModule { }

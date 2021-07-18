import { MaterialModule } from './../app/MatModules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [


  ],
  exports:[


  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ]
})
export class SharedModule { }

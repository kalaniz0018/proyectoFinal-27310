import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [ToolbarComponent,
    NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule, 
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    RouterModule
  ]
})
export class CoreModule { }

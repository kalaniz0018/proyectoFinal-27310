import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'material/material.module';

@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    ToolbarComponent,
    NavbarComponent,
    RouterModule,
    
  ]
})
export class CoreModule { }
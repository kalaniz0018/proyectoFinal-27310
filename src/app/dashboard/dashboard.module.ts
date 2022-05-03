import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ABMStudentsComponent } from './components/abm-students/abm-students.component';
import { MaterialModule } from '../shared/material/material.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditDialogComponentComponent } from './components/dialog/edit-dialog-component/edit-dialog-component.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    ABMStudentsComponent,
    CoursesComponent,
    CreateUserComponent,
    EditDialogComponentComponent,
    FormComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MaterialModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

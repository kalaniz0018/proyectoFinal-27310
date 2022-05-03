import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ABMStudentsComponent } from './components/abm-students/abm-students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../shared/material/material.module';
import { LoginComponent } from './components/login/login.component';
import { EditDialogComponentComponent } from './components/dialog/edit-dialog-component/edit-dialog-component.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    FormComponent,
    ABMStudentsComponent,
    LoginComponent,
    EditDialogComponentComponent,
    CreateUserComponent,
    CoursesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  exports:[
    RouterModule,
    FormComponent,
    ABMStudentsComponent,
    CoreModule,
    MaterialModule
  ]
})
export class FeatureModule { }

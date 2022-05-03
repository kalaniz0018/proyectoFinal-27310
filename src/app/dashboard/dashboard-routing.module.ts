import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABMStudentsComponent } from './components/abm-students/abm-students.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HomeComponent } from './components/home/home.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    //cuando la ruta  sea vacia 
    {path: '', component: HomeComponent},
     {path: 'students', component: ABMStudentsComponent}, 
    {path: 'courses', component: CoursesComponent},
    {path: 'crear-usuario', component: CreateUserComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

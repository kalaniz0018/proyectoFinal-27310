import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABMStudentsComponent } from '../feature/components/abm-students/abm-students.component';
import { CoursesComponent } from '../feature/components/courses/courses.component';
import { CreateUserComponent } from '../feature/components/create-user/create-user.component';
import { HomeComponent } from '../feature/components/home/home.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    //cuando la ruta  sea vacia 
    {path: '', component: HomeComponent},
     {path: 'feature', component: ABMStudentsComponent}, 
    {path: 'courses', component: CoursesComponent},
    {path: 'crear-usuario', component: CreateUserComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

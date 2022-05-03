import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './feature/components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch:'full'},
  //Acá tenemos cargado lo llamado "CARGA PEREZOSA" lo usamos solamente para cuando el usuario ingresa a nuestro 
  //sistema que traiga algunos componentes que el usuario va a navegar por la seccion 
  //cuando el usuario ingrese esta ruta vamos a cargar este modulo y como me devielve una promesa que me cargue el dashboard.module
  {path: "dashboard", loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule)},
  //{path: "dashboard", component: DashboardComponent},  
  {path: 'login', component: LoginComponent},
  { path: "**", redirectTo: "/login", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './feature/components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'login', component: LoginComponent},
  { path: "**", redirectTo: "/login", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementVacanciesComponent } from './components/management-vacancies/management-vacancies.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'gestionavisos', component: ManagementVacanciesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

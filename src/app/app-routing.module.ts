import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementVacanciesComponent } from './components/management-vacancies/management-vacancies.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { LoginComponent } from './components/user/login/login.component';                                  
=======
import { LoginComponent } from '../app/components/user/login/login.component';
>>>>>>> 47b1ef15bfba49cdbad7ae41b78dd449a290ab16
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LinkCompaniesComponent } from './components/link-companies/link-companies.component';
import { PostulantsComponent } from './components/postulants/postulants.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
<<<<<<< HEAD
=======
  { path: 'gestionavisos', component:  ManagementVacanciesComponent },
  { path: 'vinculacionempresa', component:  LinkCompaniesComponent },
  { path: 'postulantes', component:  PostulantsComponent },

>>>>>>> 47b1ef15bfba49cdbad7ae41b78dd449a290ab16

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

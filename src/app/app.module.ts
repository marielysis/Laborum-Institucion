
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
=======
/**** Formulario ****/ 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
>>>>>>> 47b1ef15bfba49cdbad7ae41b78dd449a290ab16

//servicios
import { AuthService } from './services/auth.service';

<<<<<<< HEAD
//Rutas
=======
//
>>>>>>> 47b1ef15bfba49cdbad7ae41b78dd449a290ab16
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManagementVacanciesComponent } from './components/management-vacancies/management-vacancies.component';
import { LinkCompaniesComponent } from './components/link-companies/link-companies.component';
import { PostulantsComponent } from './components/postulants/postulants.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
<<<<<<< HEAD

=======
>>>>>>> ac261d7129c453e7b5fe6d6ce5fb12dadbf0aec8

//firebase
import { AngularFireModule } from '@angular/fire'; // Firebase config
import { AngularFirestoreModule } from '@angular/fire/firestore'; // For Cloud Firestore
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';

<<<<<<< HEAD
// environment config
import{ environment } from '../environments/environment';
import { SelectComponent } from './components/user/select/select.component';
import { ContenedorLoginComponent } from './components/user/contenedor-login/contenedor-login.component';
import { ContenedorRegisterComponent } from './components/user/contenedor-register/contenedor-register.component';
=======
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

// environment config
import{ environment } from '../environments/environment';
>>>>>>> 47b1ef15bfba49cdbad7ae41b78dd449a290ab16

@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    RegisterComponent,
=======
    RegisterComponent
>>>>>>> ac261d7129c453e7b5fe6d6ce5fb12dadbf0aec8
=======
    RegisterComponent,
>>>>>>> 47b1ef15bfba49cdbad7ae41b78dd449a290ab16
    HomeComponent,
    ProfileComponent,
    ManagementVacanciesComponent,
    LinkCompaniesComponent,
    PostulantsComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    SelectComponent,
    ContenedorLoginComponent,
    ContenedorRegisterComponent,
    
=======
>>>>>>> ac261d7129c453e7b5fe6d6ce5fb12dadbf0aec8
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),// Import firebase
    AngularFireAuthModule,
    AngularFirestoreModule, // Import firestore
    AppRoutingModule,
  ],
  providers: [ 
    AngularFireAuth,
    AuthService ],
=======
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, 
    
  ],
  providers: [
   AngularFireAuth,
   AuthService
  ],
>>>>>>> 47b1ef15bfba49cdbad7ae41b78dd449a290ab16
  bootstrap: [AppComponent]
})
export class AppModule { }

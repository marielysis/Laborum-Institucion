import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


/**** Formulario ****/ 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

//servicio
import { AuthService } from './services/auth.service';

//Rutas
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

//Modulos de firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule }  from '@angular/fire/storage';



// environment config
import{ environment } from '../environments/environment';

@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ManagementVacanciesComponent,
    LinkCompaniesComponent,
    PostulantsComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
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
    AngularFirestoreModule,  // Necesario para las funciones de base de datos
    AngularFireStorageModule // Necesario para las funciones de almacenamiento de imagenes
    
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  providers: [
   AngularFireAuth,
   AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
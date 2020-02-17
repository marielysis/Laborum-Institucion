import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //  metodo iniciar sesion 
  onLogin() {
    
  }

   // metodo cerrar sesion
   onLogout() {
    
  }
  //metodo Redirigir  al iniciar sesion 
  onLoginRedirect() {
    

}
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, Query} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  // registar nuevo usuario
registerUser() {
  
}

  // metodo iniciar sesion con contraseña y email
loginEmailUser() {
  
}
  
  // cerrar sesion
  logoutUser() {
   
  }

}


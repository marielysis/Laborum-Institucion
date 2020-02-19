import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
<<<<<<< HEAD
=======
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, Query} from '@angular/fire/firestore';
>>>>>>> 47b1ef15bfba49cdbad7ae41b78dd449a290ab16

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  // registar nuevo usuario
<<<<<<< HEAD

}

  // metodo iniciar sesion con contraseña y email


  
  // cerrar sesion



=======
registerUser() {
  
}

  // metodo iniciar sesion con contraseña y email
loginEmailUser() {
  
}
  
  // cerrar sesion
  logoutUser() {
   
  }

}
>>>>>>> 47b1ef15bfba49cdbad7ae41b78dd449a290ab16


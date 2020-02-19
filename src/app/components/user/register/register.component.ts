

import { Component, OnInit ,NgZone} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 
export class RegisterComponent implements OnInit {
  errorMessage = '';

  constructor(private afAuth: AngularFireAuth, private router: Router, private fb: FormBuilder, private ngZone: NgZone) { }
  registerForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    remember: [true]
  })

  ngOnInit(){
  }
  createUser() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
    .then(() => {
       this.router.navigate(['/home']);
     }).catch(response => {
       this.errorMessage = response.message;
     });
    }
}


import { Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, Validators,} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

get email(){
  return this.loginForm.get('email');
}
get password() {
  return this.loginForm.get('password');
}
  errorMessage = '';

  constructor(private afAuth: AngularFireAuth, private router: Router, private fb: FormBuilder, private ngZone: NgZone) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', {   validators: [Validators.required, Validators.minLength(4)] }],
    remember: [true]
  })

 ngOnInit() {
   this.afAuth.user.subscribe(user => {
    if (user) {
      this.ngZone.run(() => {
        this.router.navigate(['/home']);
      })
    }
  })
}


signIn() { 
 this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
 .then(() => {
    this.router.navigate(['/home']);
  }).catch(response => {
    this.errorMessage = response.message;
  });
}

 }

 

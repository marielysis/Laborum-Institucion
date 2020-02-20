import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      businessName: ['', [Validators.required]],
      address: ['', [Validators.email]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      registrationDate: ['', [Validators.required]],
      lastModificationDate: ['', [Validators.required]],
      description: ['', [Validators.maxLength(50)]],
      analytics: ['', [Validators.required]],
    });

    // this.form.valueChanges
    // .pipe(
    //   debounceTime(500)
    //   )
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  save(event: Event) {
    event.preventDefault(); 
      const value = this.form.value;
      console.log(value);
    
  }

}

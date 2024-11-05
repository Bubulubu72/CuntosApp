import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from '../../shared/services/login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form: FormGroup;

  formRes = '';
  
  constructor(private httpClient: HttpClient, formBuilder: FormBuilder, private router:Router, 
      private LoginService: LoginService){

    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: [() => this.comparePasswords()]
    });
  };

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].errors && this.form.controls[controlName].errors![errorName];
  }
  
  comparePasswords() {
    if(!this.form) return null;

    const { password, confirm } = this.form.getRawValue();
    if (password === confirm) {
      return null;
    } else {
      return {
        match: true
      }
    }
  }

  signup() {

    let newUser = {
      'username': this.form.controls['name'].value,
      'email': this.form.controls['email'].value,
      'password': this.form.controls['password'].value
    }

    this.LoginService.register(newUser).subscribe((response: any) => {
      this.formRes = response;
      console.log(response);
    },
      (error: any) => {
        if(error.status === 404){
          alert('Error pagina no encontrada');
        }
        else if(error.status === 401){
          let dataError = JSON.stringify(error.error.error)
          alert(`Error: ${dataError}`);
        }
      }
    );

    this.router.navigateByUrl("login");
  }

  gotoLogin(){
    this.router.navigateByUrl("login");
  }

}

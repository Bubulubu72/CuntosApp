import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from '../../shared/services/login/login.service';
import { response } from 'express';
import { TokenService } from '../../shared/services/token/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
  http: any;

  form: FormGroup;
  Token = '';
  
  constructor(private httpClient: HttpClient,private tokenService:TokenService, formBuilder: FormBuilder, private router:Router
    , private LoginService: LoginService){

    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  };

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].errors && this.form.controls[controlName].errors![errorName];
  }

  login(){

    let user = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value
    };

    this.LoginService.login(user).subscribe(
      (response: any) => {
        setTimeout(() => {
          this.Token = response.token;
          this.tokenService.save(this.Token);
          this.router.navigateByUrl("");
        })
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
    )
  };

  signup(){
    this.router.navigateByUrl("signup");
  };

  saveToken(){
    this.tokenService.save("google");
  }

}

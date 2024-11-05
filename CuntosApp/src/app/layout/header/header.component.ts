import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TokenService } from '../../shared/services/token/token.service';
import { LoginService } from '../../shared/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user:any;
  constructor(private router:Router,private tokenService:TokenService,private loginService:LoginService){}
  ngOnInit(): void{
    setTimeout(() => {
      this.getUsername();
    })
  }
  gotoHome(){
    this.router.navigateByUrl("");
  }
  gotoCuentos(){
    this.router.navigateByUrl("cuentos");
  }
  gotoGaleria(){
    this.router.navigateByUrl("gallery");
  }
  logout(){
    this.router.navigateByUrl("login");
    this.tokenService.remove();
  }
  getUsername(){
    this.user=this.loginService.getUserData(this.tokenService.get()).subscribe((response: any) => {
      if(response){
        this.user = response[0];
      }else{
        this.user = "user";
      }
    });
  }
}

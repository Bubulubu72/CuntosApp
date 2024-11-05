import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cuento } from '../../shared/interfaces/cuento';
import { CuentosService } from '../../shared/services/cuentos/cuentos.service';
import { json } from 'body-parser';
import { TokenService } from '../../shared/services/token/token.service';

@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.component.html',
  styleUrls: ['./cuentos.component.scss']
})
export class CuentosComponent {
  cuentos: any = [];

  filterCuento="";

  constructor(private cuentosService:CuentosService,private router:Router,private tokenService:TokenService){}

  ngOnInit(): void {
    this.obtenerCuentos();
  }
  
  obtenerCuentos(){
    this.cuentosService.getCuentos().subscribe((response: any) => {
      this.cuentos = response;
      console.log("Cyentos ",this.cuentos);
    });
  }
  selectCuento(cuento:any){
    console.log(cuento);
    this.router.navigate(["scuento",cuento.uuid]);
  }

  deleteCuento(cuento:any){
    this.cuentosService.deleteCuento(cuento.uuid).subscribe(
      (response: any) => {
        this.obtenerCuentos();
      },
      (error: any) => {
        if(error.status === 404){
          alert('Error al borrar el cuento');
        }
        else if(error.status === 401){
          let dataError = JSON.stringify(error.error.error)
          alert(`Error: ${dataError}`);
        }
      }
    );
  }
}

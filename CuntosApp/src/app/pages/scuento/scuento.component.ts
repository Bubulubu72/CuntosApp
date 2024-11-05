import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cuento } from '../../shared/interfaces/cuento';
import { CuentosService } from '../../shared/services/cuentos/cuentos.service';

@Component({
  selector: 'app-scuento',
  templateUrl: './scuento.component.html',
  styleUrls: ['./scuento.component.scss']
})
export class ScuentoComponent {
  cuento:Cuento={
    uuid:"", 
    title:"", 
    description:"",
    publicationDate:"",
    imageUrl:"",
    uuidUser:""
  };
  constructor(private cuentosService:CuentosService,private route: ActivatedRoute){}


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.cuentosService.getCuentos().subscribe((response: any[]) => {
        this.cuento=response.find((c: { uuid: any; }) => c.uuid === params["id"])!;
        console.log("c ",this.cuento);
      })
      
    });

  }
}

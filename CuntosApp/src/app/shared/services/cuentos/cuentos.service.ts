import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Cuento } from '../../interfaces/cuento';

@Injectable({
  providedIn: 'root'
})
export class CuentosService {

  cuentos:Cuento[]=[];
  /*
  cuentos: Cuento[] = [
    {
      id:"1",
      foto: 'https://cdn.pixabay.com/photo/2017/06/10/22/58/woman-2391033_1280.jpg',
      titulo: 'Titulo 1',
      contenido: 'Contenido de cuento 1',
      fecha: "26/11/2023",
      idUser: ""
    },
    {
      id:"2",
      foto: 'https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_1280.jpg',
      titulo: 'Titulo 2',
      contenido: 'Contenido de cuento 2',
      fecha: "26/11/2023",
      idUser: ""
    },
    {
      id:"3",
      foto: 'https://cdn.pixabay.com/photo/2018/04/03/20/29/forest-3287976_1280.jpg',
      titulo: 'Titulo 3',
      contenido: 'Contenido de cuento 3',
      fecha: "26/11/2023",
      idUser: ""
    },
    {
      id:"4",
      foto: 'https://cdn.pixabay.com/photo/2019/11/06/14/33/moon-4606246_1280.jpg',
      titulo: 'Titulo 4',
      contenido: 'Contenido de cuento 4',
      fecha: "26/11/2023",
      idUser: ""
    },
    {
      id:"5",
      foto: 'https://cdn.pixabay.com/photo/2017/01/27/21/24/wintry-2014228_1280.jpg',
      titulo: 'Titulo 5',
      contenido: 'Contenido de cuento 5',
      fecha: "26/11/2023",
      idUser: ""
    }
  ];*/

  constructor(private httpClient: HttpClient) { }

  getCuentos(): Observable<any> {
    const response = this.httpClient.get<any>("https://api-web-m5lb.onrender.com/api/Stories");
    //console.log(url);
    return response;
  }

  deleteCuento(uuid:string):any{
    const headers={'uuid': uuid}
    const response = this.httpClient.delete("https://api-web-m5lb.onrender.com/api/Stories/"+uuid);
    console.log(uuid);
    return response;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cfilter'
})
export class CfilterPipe implements PipeTransform {

  transform(value: any,args: any): any {
    const resultCuentos=[];
    if(args===""){return value;}
    for(const cuento of value){
      if(cuento.title.toLowerCase().indexOf(args.toLowerCase())!=-1){
        resultCuentos.push(cuento);
      }
    }
    return resultCuentos;
  }

}

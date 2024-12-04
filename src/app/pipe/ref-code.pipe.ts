import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refCode'
})
export class RefCodePipe implements PipeTransform {

  transform(value: string):string{
    let resultado:string;
    resultado = "Ref-" + value
    return resultado
  }

}

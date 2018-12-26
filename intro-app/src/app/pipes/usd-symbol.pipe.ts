import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdSymbol'
})
export class UsdSymbolPipe implements PipeTransform {

  transform(items: any, value: string): string {
    return items.substr(0,1)+' ' +items.substr(1);
}

}

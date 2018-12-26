import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clpSymbol'
})
export class ClpSymbolPipe implements PipeTransform {

  transform(items: any, value: string): string {
    return items.substr(0,3)+' ' +items.substr(3).replace(/,/,'.');
}

}

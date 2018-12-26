import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

   endpointReal = 'https://api.cambio.today/v1/quotes/FROM/TO/json?quantity=QUANTITY&key=1559|Cum62uezE3e6t4fdFMySNrBGXrF5HM2J';
   endpoint: string;
  constructor(private http: HttpClient) {
   
   }

   public getMoneyChange(MoneyFrom, MoneyTo, quantity ){
    
    
    this.endpoint = this.endpointReal.replace(/FROM/, MoneyFrom).replace(/TO/, MoneyTo).replace(/QUANTITY/, quantity);

    console.log(this.endpoint);
    return this.http.get(this.endpoint).pipe(
      map(this.extractData));
     
   }

   private extractData(res: any) {
    let body = res.result.amount;
    console.log(res);
    return body || { };
  }
}

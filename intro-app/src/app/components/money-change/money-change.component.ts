import { Component, OnInit } from '@angular/core';
import { MoneyService } from '../../services/money/money.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-money-change',
  templateUrl: './money-change.component.html',
  styleUrls: ['./money-change.component.css']
})
export class MoneyChangeComponent implements OnInit {

  usd = 'USD';
  clp = 'CLP';
  usdQuantity:any = 0;
  totalCLP:any;

  constructor(public moneyService:MoneyService) { }

  ngOnInit() {
   
  }

  calcChange(){
    this.moneyService.getMoneyChange(this.usd, this.clp , this.usdQuantity).subscribe((result) => {
      this.totalCLP = Math.round(result);
    }, (err) => {
      console.error(err);
    });
  }

}

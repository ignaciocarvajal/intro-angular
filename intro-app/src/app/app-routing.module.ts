import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { MoneyChangeComponent } from './components/money-change/money-change.component';

const routes: Routes = [
  { path: '', redirectTo: '/change', pathMatch: 'full' },
  { path: 'change', component: MoneyChangeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: MoneyChangeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

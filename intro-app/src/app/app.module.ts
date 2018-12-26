import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MoneyService } from './services/money/money.service';
import { UserService } from './services/user/user.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { MoneyChangeComponent } from './components/money-change/money-change.component';
import { from } from 'rxjs';
import { UsdSymbolPipe } from './pipes/usd-symbol.pipe';
import { ClpSymbolPipe } from './pipes/clp-symbol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    MoneyChangeComponent,
    UsdSymbolPipe,
    ClpSymbolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    MoneyService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCurrencyComponent } from './card-currency/card-currency.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    CardCurrencyComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardCurrencyComponent,
    HeaderComponent
  ]
})
export class SharedModule { }

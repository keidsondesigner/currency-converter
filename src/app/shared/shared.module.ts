import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCurrencyComponent } from './card-currency/card-currency.component';
import { HeaderComponent } from './header/header.component';
import { SplitPipe } from '../core/pipes/split.pipe';



@NgModule({
  declarations: [
    CardCurrencyComponent,
    HeaderComponent,
    SplitPipe
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

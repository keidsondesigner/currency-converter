import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { consultCurrencysReducer, consultCurrencysStateFeatureKey } from '../core/providers/consult-currencys/consult-currencys.reducer';
import { ConsultCurrencysEffects } from '../core/providers/consult-currencys/consult-currencys.effects';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    StoreModule.forFeature(consultCurrencysStateFeatureKey, consultCurrencysReducer),
    EffectsModule.forFeature([
      ConsultCurrencysEffects
    ]),
  ]
})
export class PagesModule { }

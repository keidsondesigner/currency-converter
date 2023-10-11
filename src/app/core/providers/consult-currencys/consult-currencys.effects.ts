import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';

import { getList, getListError, getListSuccess } from './consult-currencys.actions';
import { CurrencyDataResponse } from '@interfaces/currency-data.interface';
import { ExchangeRateService } from '@services/exchange-rate.service';


@Injectable()
export class ConsultCurrencysEffects {
  constructor(private actions$: Actions, private store: Store, public _exchangeRateService: ExchangeRateService) {}

  getList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getList),
        tap(({ codeCurrency }) => {
          return this._exchangeRateService.getCurrencys(codeCurrency).pipe(
            map((currency: any) => {
              const key = Object.keys(currency)[0]
              const currencyDataResponse = {
              currencyData: currency[key],
              error: "",
              loading: false
              }
              return currencyDataResponse;
            })
          ).subscribe({
            next: (currencyDataResponse: CurrencyDataResponse) => {
              setTimeout(()=> {
                this.store.dispatch(getListSuccess({ currencyDataResponse }));
              }, 1000)
            },
            error: (error) => {
              console.error(error);
              setTimeout(()=> {
                this.store.dispatch(getListError({ error: error.message, codeCurrency }));
              }, 1000)
            },
          });
        })
      ),
    { dispatch: false }
  );
}

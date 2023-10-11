import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, take } from 'rxjs/operators';

import { clearState, getList } from './consult-currencys.actions';
import { selectList } from './consult-currencys..selectors';
import { CurrencyDataResponse } from '@interfaces/currency-data.interface';


@Injectable({
  providedIn: 'root'
})
export class ConsultCurrencysFacade {
  constructor(private store: Store) {}

  clearState() {
    this.store.dispatch(clearState());
  }

  getList(codeCurrency: string) {
    this.store.dispatch(getList({codeCurrency}));
    setInterval(() => {
      this.getList(codeCurrency)
    }, 180000)
  }

  selectList$(): Observable<CurrencyDataResponse[]> {
    return this.store.select(selectList).pipe(
      distinctUntilChanged(),
      filter(data => !!data)
    );
  }

  selectList(): Observable<CurrencyDataResponse[]> {
    return this.selectList$().pipe(take(1));
  }
}

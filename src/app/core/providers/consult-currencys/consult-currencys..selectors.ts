import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConsultCurrencysState, consultCurrencysStateFeatureKey } from './consult-currencys.reducer';
import { CurrencyDataResponse } from '@interfaces/currency-data.interface';


export const selectConsultCurrencys = createFeatureSelector<ConsultCurrencysState>(consultCurrencysStateFeatureKey);

export const selectList = createSelector(
  selectConsultCurrencys,
  (state: ConsultCurrencysState): CurrencyDataResponse[] => state.list
);



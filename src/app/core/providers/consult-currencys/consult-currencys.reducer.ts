import { Action, ActionReducer, createReducer, on } from "@ngrx/store";

import { CurrencyData, CurrencyDataResponse } from "@interfaces/currency-data.interface";
import { clearState, getList, getListError, getListSuccess } from "./consult-currencys.actions";


export interface ConsultCurrencysState {
  list: CurrencyDataResponse[];
}

export const consultCurrencysStateFeatureKey = 'consultCurrencys';

export const initialState: ConsultCurrencysState = {
  list: []
};

export const consultCurrencysReducer: ActionReducer<ConsultCurrencysState, Action> = createReducer(
  initialState,
  on(clearState, () => ({
    ...initialState
  })),

  on(getList, (state, { codeCurrency }) => ({
    ...state,
    list: updatedList(state.list, codeCurrency)
  })),

  on(getListSuccess, (state, { currencyDataResponse }) => ({
    ...state,
    list: updatedListSuccess(state.list, currencyDataResponse),
  })),

  on(getListError, (state, { error, codeCurrency }) => ({
    ...state,
    list: updatedListError(state.list, codeCurrency, error)
  })),
);

const updatedList = (list: CurrencyDataResponse[], codeCurrencyComplete: string) => {
  const codeCurrency = codeCurrencyComplete.split('-')[0];

  const existsInList = list.some((currencyDataResponse)=> {
    return currencyDataResponse.currencyData.code === codeCurrency;
  });

  if (existsInList) {
    let newList: CurrencyDataResponse[];
    newList = list.map(currencyDataResponse => ({
      ...currencyDataResponse,
      error: currencyDataResponse.currencyData.code === codeCurrency ? '' : currencyDataResponse.error,
      loading: currencyDataResponse.currencyData.code === codeCurrency ? true : currencyDataResponse.loading
    }))

    return newList;
  } else {
    const currencyData: CurrencyData = {
      code: codeCurrency,
      codein: "",
      name: "",
      high: "",
      low: "",
      varBid: "",
      pctChange: "",
      bid: "",
      ask: "",
      timestamp: "",
      create_date: ""
    };
    const currencyDataResponse: CurrencyDataResponse = {
      currencyData: currencyData,
      error: '',
      loading: true
    };

    return list.concat(currencyDataResponse);
  }
}

const updatedListSuccess = (list: CurrencyDataResponse[], item: CurrencyDataResponse) => {
  const existsInList = list.some((currencyDataResponse)=> {
    return currencyDataResponse.currencyData.code === item.currencyData.code;
  });

  if (existsInList) {
    let newList: CurrencyDataResponse[];
    newList = list.map(currencyDataResponse => ({
      currencyData: currencyDataResponse.currencyData.code === item.currencyData.code ? item.currencyData : currencyDataResponse.currencyData,
      // ...item,
      error: currencyDataResponse.currencyData.code === item.currencyData.code ? '' : currencyDataResponse.error,
      loading: currencyDataResponse.currencyData.code === item.currencyData.code ? false : currencyDataResponse.loading
    }))

    return newList;
  } else {
    const currencyData: CurrencyData = item.currencyData;
    const currencyDataResponse: CurrencyDataResponse = {
      currencyData: currencyData,
      error: '',
      loading: false
    };

    return list.concat(currencyDataResponse);
  }
}

const updatedListError = (list: CurrencyDataResponse[], codeCurrencyComplete: string, error: string) => {
  const codeCurrency = codeCurrencyComplete.split('-')[0];
  const existsInList = list.some((currencyDataResponse)=> {
    return currencyDataResponse.currencyData.code === codeCurrency;
  });

  if (existsInList) {
    let newList: CurrencyDataResponse[];
    newList = list.map(currencyDataResponse => ({
      ...currencyDataResponse,
      error: currencyDataResponse.currencyData.code === codeCurrency ? error : currencyDataResponse.error,
      loading: currencyDataResponse.currencyData.code === codeCurrency ? false : currencyDataResponse.loading
    }))

    return newList;
  } else {
    const currencyData: CurrencyData = {
      code: codeCurrency,
      codein: "",
      name: "",
      high: "",
      low: "",
      varBid: "",
      pctChange: "",
      bid: "",
      ask: "",
      timestamp: "",
      create_date: ""
    };
    const currencyDataResponse: CurrencyDataResponse = {
      currencyData: currencyData,
      error,
      loading: false
    };

    return list.concat(currencyDataResponse);
  }
}


import { CurrencyDataResponse } from "@interfaces/currency-data.interface";
import { createAction, props } from "@ngrx/store";


export const CLEAR_STATE = '[Consult Currencys] Clear State List Currencys';
export const clearState = createAction(CLEAR_STATE);


export const GET_LIST = '[Consult Currencys] Get List Currencys';
export const GET_LIST_SUCCESS = '[Consult Currencys] Get List Currencys Success';
export const GET_LIST_ERROR = '[Consult Currencys] Get List Currencys Error';

export const getList = createAction(GET_LIST, props<{ codeCurrency: string }>());
export const getListSuccess = createAction(GET_LIST_SUCCESS, props<{ currencyDataResponse: CurrencyDataResponse }>());
export const getListError = createAction(GET_LIST_ERROR, props<{ error: string; codeCurrency: string }>());

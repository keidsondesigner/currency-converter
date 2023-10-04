import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CurrencyDataResponse } from "@interfaces/currency-data.interface";





@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  protected baseUrl = environment.host;

  constructor( private http: HttpClient){ }

  getCurrencys(): Observable<CurrencyDataResponse> {
    return this.http.get<CurrencyDataResponse>(`${this.baseUrl}/last/CAD-BRL,ARS-BRL,GBP-BRL`);
  }
}

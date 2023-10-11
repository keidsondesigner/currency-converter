import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Currency } from "@interfaces/currency-data.interface";


@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  protected baseUrl = environment.host;

  constructor( private http: HttpClient){ }

  getCurrencys(codeCurrency: string): Observable<Currency> {
    return this.http.get<Currency>(`${this.baseUrl}/last/${codeCurrency}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    )
  }
}

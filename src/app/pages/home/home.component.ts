import { Component, OnInit } from '@angular/core';
import { CurrencyDataResponse } from '@interfaces/currency-data.interface';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ConsultCurrencysFacade } from 'src/app/core/providers/consult-currencys/consult-currencys.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listCurrencys$!: Observable<CurrencyDataResponse[]>;
  isLoading!: boolean;
  error!: any;
  destroyed$!: Subject<void>;

  constructor( private _consultCurrencysFacade: ConsultCurrencysFacade ) { }

  ngOnInit(): void {
    this.setup();
  }

  setup() {
    this.destroyed$ = new Subject();
    this._consultCurrencysFacade.clearState();
    this._consultCurrencysFacade.getList('CAD-BRL');
    this._consultCurrencysFacade.getList('ARS-BRL');
    this._consultCurrencysFacade.getList('GBP-BRL');

    this.listCurrencys$ = this._consultCurrencysFacade.selectList$().pipe(
      takeUntil(this.destroyed$)
    )
  }

  onReloadData(dataCode: string) {
    this._consultCurrencysFacade.getList(dataCode + '-BRL');
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

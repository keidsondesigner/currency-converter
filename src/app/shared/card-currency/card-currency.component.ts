import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyData } from '@interfaces/currency-data.interface';

@Component({
  selector: 'app-card-currency',
  templateUrl: './card-currency.component.html',
  styleUrls: ['./card-currency.component.scss']
})
export class CardCurrencyComponent {
  @Input() data!: CurrencyData;
  @Input() loading!: boolean;
  @Input() error?: string;

  @Output() handleReloadData = new EventEmitter<string>();
}

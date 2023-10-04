import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SplitPipe } from '../core/pipes/split.pipe';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    SplitPipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }

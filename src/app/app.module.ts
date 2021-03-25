import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderItemComponent } from './order-list/order-item/order-item.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderChangeComponent } from './order-change/order-change.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderFormComponent,
    OrderItemComponent,
    OrderChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

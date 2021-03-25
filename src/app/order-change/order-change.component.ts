import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'order-change',
  templateUrl: './order-change.component.html'
})
export class OrderChangeComponent {
  public coffeeType = 'Coffee';

  constructor(private httpClient: HttpClient) {
  }

  public click(state: string): void {
    this.httpClient.put(`http://localhost:4200/api/coffee/${state}/${this.coffeeType}`, {}).subscribe();
  }
}

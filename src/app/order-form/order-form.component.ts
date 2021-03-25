import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent {
  orderMessage: { customerName: string, coffeeType: string } = {
    customerName: '',
    coffeeType: ''
  };

  constructor(private httpClient: HttpClient) {
  }

  public onSubmit(): void {
    this.httpClient.post('http://localhost:4200/api/coffee', this.orderMessage).subscribe();
  }
}

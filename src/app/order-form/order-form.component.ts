import {Component} from '@angular/core';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent {
  orderMessage: { customerName: string, coffeeType: string } = {
    customerName: '',
    coffeeType: ''
  };

  public onSubmit(): void {
  }
}

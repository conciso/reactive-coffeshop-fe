import {Component} from '@angular/core';

@Component({
  selector: 'order-change',
  templateUrl: './order-change.component.html'
})
export class OrderChangeComponent {
  public coffeeType = 'Coffee';

  public click(state: string): void {
  }
}

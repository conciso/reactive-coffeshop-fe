import {Component, Input} from '@angular/core';
import {Order} from '../order.type';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent {
  @Input() order: Order = {coffeeType: '', customerName: '', state: 'ORDERED', update: false};
}

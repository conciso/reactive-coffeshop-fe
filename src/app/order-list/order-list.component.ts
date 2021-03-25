import { Component, OnInit } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {scan} from 'rxjs/operators';
import {Order} from './order.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {

  private socket$: WebSocketSubject<Order> = webSocket<Order>('ws://localhost:8080/ws/coffee');
  public coffees$: Observable<Order[]> | undefined;

  ngOnInit(): void {
    this.coffees$ = this.socket$.pipe(
      scan((acc: Order[], value: Order) => {
        if (!value.update) {
          console.log('New');
          return [...acc, value];
        } else {
          console.log('Update');
          const index = acc.findIndex(o =>
            o.customerName === value.customerName &&
            o.coffeeType === value.coffeeType &&
            o.state === this.previousState(value.state));
          acc[index].state = value.state;
          return acc;
        }
      }, [])
    );
  }

  private previousState(state: string): string {
    switch (state) {
      case 'PROCESSING':
        return 'ORDERED';
      case 'BREWED':
        return 'PROCESSING';
      default:
        throw new Error('Unkown state');
    }
  }
}

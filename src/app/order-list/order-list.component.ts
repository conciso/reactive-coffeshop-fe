import {Component, OnInit} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {scan} from 'rxjs/operators';
import {Order} from './order.type';
import {Observable} from 'rxjs';

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
        return [...acc, value];
      }, [])
    );
  }
}

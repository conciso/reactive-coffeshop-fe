import {Component, OnInit} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {scan} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-coffeshop-fe';
  private socket$: WebSocketSubject<any> = webSocket('ws://localhost:8080/ws/coffee');
  public coffees$: any;

  ngOnInit(): void {
    this.coffees$ = this.socket$.pipe(
      scan((acc: any[], value: any) => [...acc, value], [])
    );
  }
}

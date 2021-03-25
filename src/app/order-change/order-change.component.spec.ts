import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderChangeComponent } from './order-change.component';

describe('OrderChangeComponent', () => {
  let component: OrderChangeComponent;
  let fixture: ComponentFixture<OrderChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

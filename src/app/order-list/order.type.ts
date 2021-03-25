export interface Order {
  coffeeType: string;
  customerName: string;
  state: 'ORDERED' | 'PROCESSING' | 'BREWED';
  update: boolean;
}

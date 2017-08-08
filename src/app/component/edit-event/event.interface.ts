export interface groupeeEvent {
  name: string;
  state: string;
  items: Item[];
}

export interface Item{
  description: string;
  amount: number;
}
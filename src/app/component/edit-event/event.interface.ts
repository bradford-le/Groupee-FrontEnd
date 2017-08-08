export interface groupeeEvent {
  name: string;
  state: string;
  items: Item[];
}

export interface Item{
  userId: string;
  description: string;
  amount: number;
}
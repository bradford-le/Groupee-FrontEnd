export interface groupeeEvent {
  name: string;
  state: string;
  items: Item[];
  members: Member[];
}

export interface Item{
  userId: string;
  description: string;
  amount: number;
}

export interface Member {
  username: string;
}
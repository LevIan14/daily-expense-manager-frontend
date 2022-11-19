export interface ExpenseManager {
  id?: number;
  type: string;
  note: string;
  category: string;
  amount: number;
  date: string;
}

export interface Category {
  id?: number;
  type: string;
  name: string;
}

export interface User {
  id?: number;
  username: string;
  password: string;
}

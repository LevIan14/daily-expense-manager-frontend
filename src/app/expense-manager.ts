export interface ExpenseManager {
  id?: string;
  type: string;
  note: string;
  category: string;
  amount: number;
  date: string;
}

export interface Category {
  id?: string;
  type: string;
  name: string;
}

export interface User {
  username: string;
  password: string;
}

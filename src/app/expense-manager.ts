export interface Transaction {
  transactionId?: number;
  type: string;
  note: string;
  category: string;
  amount: number;
  date: string;
}

export interface Category {
  id?: number;
  category_group: CategoryGroup;
  category_name: string;
}

export interface CategoryGroup {
  categoryGroupId: number;
  categoryGroupName: string;
}

export interface User {
  id?: number;
  username: string;
  password: string;
}

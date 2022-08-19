export interface Orders {
  id?: number;
  userId: number;
  productsIds: Array<number> | unknown;
}
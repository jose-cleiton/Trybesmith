import { Orders } from '../interfaces/OrdersResponse';

const filterData = (data: Orders[]): Orders[] => data.reduce((
  acc: Orders[],
  each: Orders,
  i: number,
  arr: Orders[],
) => {
  if (arr[i + 1]) {
    if (each.id !== arr[i + 1].id) {
      acc.push({ ...each, productsIds: [each.productsIds] });
    } else {
      acc.push({ ...each, productsIds: [arr[i + 1].productsIds, each.productsIds] });
    }
  }
  return acc;
}, []);

export default filterData;
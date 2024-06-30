import dayjs from 'dayjs/esm';

import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
  name: 'Customer-focused',
  price: 96307,
  stock: 78560,
};

export const sampleWithPartialData: IProduct = {
  id: 88494,
  name: 'deposit',
  price: 49054,
  stock: 31634,
  dateAdded: dayjs('2024-06-30'),
};

export const sampleWithFullData: IProduct = {
  id: 54568,
  name: 'recontextualize',
  description: 'Health calculate neural',
  price: 3502,
  stock: 92177,
  dateAdded: dayjs('2024-06-30'),
  lastUpdated: dayjs('2024-06-29'),
};

export const sampleWithNewData: NewProduct = {
  name: 'Garden Customer-focused Island',
  price: 13074,
  stock: 35902,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import { IOrderItem, NewOrderItem } from './order-item.model';

export const sampleWithRequiredData: IOrderItem = {
  id: 62496,
  quantity: 85505,
  unitPrice: 70793,
};

export const sampleWithPartialData: IOrderItem = {
  id: 30852,
  quantity: 61163,
  unitPrice: 15882,
};

export const sampleWithFullData: IOrderItem = {
  id: 50845,
  quantity: 74213,
  unitPrice: 67235,
};

export const sampleWithNewData: NewOrderItem = {
  quantity: 54419,
  unitPrice: 13429,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

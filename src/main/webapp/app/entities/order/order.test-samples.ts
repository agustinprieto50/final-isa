import dayjs from 'dayjs/esm';

import { OrderStatus } from 'app/entities/enumerations/order-status.model';

import { IOrder, NewOrder } from './order.model';

export const sampleWithRequiredData: IOrder = {
  id: 47761,
  orderDate: dayjs('2024-06-30T10:43'),
  status: OrderStatus['CANCELLED'],
  totalAmount: 52696,
};

export const sampleWithPartialData: IOrder = {
  id: 69128,
  orderDate: dayjs('2024-06-30T10:50'),
  status: OrderStatus['COMPLETED'],
  totalAmount: 56605,
};

export const sampleWithFullData: IOrder = {
  id: 84971,
  orderDate: dayjs('2024-06-30T16:23'),
  status: OrderStatus['CANCELLED'],
  totalAmount: 93694,
};

export const sampleWithNewData: NewOrder = {
  orderDate: dayjs('2024-06-30T04:14'),
  status: OrderStatus['PENDING'],
  totalAmount: 82425,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

import dayjs from 'dayjs/esm';
import { ICustomer } from 'app/entities/customer/customer.model';

export interface IProduct {
  id: number;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  stock?: number | null;
  dateAdded?: dayjs.Dayjs | null;
  lastUpdated?: dayjs.Dayjs | null;
  customer?: Pick<ICustomer, 'id'> | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };

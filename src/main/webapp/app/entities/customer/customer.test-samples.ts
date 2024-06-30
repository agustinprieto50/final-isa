import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 24379,
  firstName: 'Erin',
  lastName: 'White',
  email: 'Deontae_Hermiston88@yahoo.com',
};

export const sampleWithPartialData: ICustomer = {
  id: 8794,
  firstName: 'Dominique',
  lastName: 'Schowalter',
  email: 'Kari_Lebsack@hotmail.com',
};

export const sampleWithFullData: ICustomer = {
  id: 50418,
  firstName: 'Rowan',
  lastName: 'McCullough',
  email: 'Amira_Block@gmail.com',
  phone: '1-414-967-5237 x76635',
};

export const sampleWithNewData: NewCustomer = {
  firstName: 'Joel',
  lastName: 'Bechtelar',
  email: 'Gabriel_Mayer26@yahoo.com',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

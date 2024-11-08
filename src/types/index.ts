import PaymentForm from 'app/components/PaymentForm';

export interface PayerAccounts {
  id: string;
  iban: string;
  balance: number;
}

export interface PaymentForm {
  payerAccount: string;
  amount: number;
  payeeAccount: string;
  payee: string;
  purpose: string;
}

export interface PaymentRequest extends PaymentForm {}

export interface PaymentResponse {
  iban: string;
  valid: boolean;
}

export enum Language {
  EN = 'en',
  LT = 'lt',
}

import { Language, PayerAccounts } from 'types';

export interface AppState {
  payerAccounts: PayerAccounts[];
  language: Language;
  error: string | null;
}

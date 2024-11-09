import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { rootReducer } from 'store/configureStore';
import { AppState } from './types';
import { Language, PaymentForm } from 'types';

export const initialState: AppState = {
  payerAccounts: [
    {
      iban: 'LT307300010172619160',
      id: '1',
      balance: 1000.12,
    },
    {
      iban: 'LT307300010172619161',
      id: '2',
      balance: 2.43,
    },
    {
      iban: 'LT307300010172619162',
      id: '3',
      balance: -5.87,
    },
    {
      iban: 'LT307300010172619162',
      id: '4',
      balance: 50000,
    },
  ],
  language: Language.EN,
  error: null,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    selectlanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    paymentError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    paymentSuccess: (state, action: PayloadAction<PaymentForm>) => {
      const payerAccount = state.payerAccounts.find(
        (account) => account.id === action.payload.payerAccount
      );

      if (payerAccount) {
        payerAccount.balance -= action.payload.amount;

        const payeeAccount = state.payerAccounts.find(
          (account) => account.iban === action.payload.payeeAccount
        );

        if (payeeAccount) {
          payeeAccount.balance += action.payload.amount;
        }
      }
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});

declare module 'store/types' {
  export interface LazyLoadedSlices extends WithSlice<typeof slice> {}
}

slice.injectInto(rootReducer);

export const { actions: appActions } = slice;

export const useThemeSlice = () => {
  return { actions: slice.actions };
};

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

import { initialState } from '.';

export const selectApp = (state: RootState) => state.app ?? initialState;

export const selectPayerAccounts = createSelector(
  [selectApp],
  (state) => state.payerAccounts
);

export const selectLanguage = createSelector(
  [selectApp],
  (state) => state.language
);

export const selectBalanceByAccountId = (id: string | undefined) =>
  createSelector([selectApp], (state) => {
    if (!id) {
      return undefined;
    }

    const account = state.payerAccounts.find((account) => account.id === id);
    return account?.balance ?? undefined;
  });

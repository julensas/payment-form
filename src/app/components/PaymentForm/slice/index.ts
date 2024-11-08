import { createSlice, WithSlice } from '@reduxjs/toolkit';
import { rootReducer } from 'store/configureStore';
import { AppState } from './types';

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
  ],
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

declare module 'store/types' {
  export interface LazyLoadedSlices extends WithSlice<typeof slice> {}
}

slice.injectInto(rootReducer);

export const { actions: themeAction } = slice;

export const useThemeSlice = () => {
  return { actions: slice.actions };
};

import { Api } from 'store/api';

import { appActions } from './';
import { PaymentRequest, PaymentResponse } from 'types';

export const appApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    submitPayment: builder.mutation<PaymentResponse, PaymentRequest>({
      query: ({ payeeAccount }) => ({
        url: 'validate/',
        method: 'GET',
        params: { iban: payeeAccount },
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        dispatch(appActions.resetError());
        const { data } = await queryFulfilled;
        if (data.valid) {
          dispatch(appActions.paymentSuccess(arg));
        } else {
          dispatch(appActions.paymentError('Invalid IBAN'));
        }
      },
    }),
  }),
});

export const { useSubmitPaymentMutation } = appApi;

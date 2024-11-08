import React from 'react';
import { Amount } from 'app/common/AppInput/Amount';
import { PayerAccount } from 'app/common/AppInput/PayerAccount';
import { PayeeAccount } from 'app/common/AppInput/PayeeAccount';
import { Purpose } from 'app/common/AppInput/Purpose';
import { Payee } from 'app/common/AppInput/Payee';
import Form from 'app/common/Form';
import { PaymentForm as PaymentFormType } from 'types';
import './styles.css';
import { useSubmitPaymentMutation } from 'app/slice/query';

const PaymentForm: React.FC = () => {
  const [submit, { isLoading }] = useSubmitPaymentMutation();

  const onSubmit = async (data: PaymentFormType) => {
    await submit(data);
  };

  return (
    <Form<PaymentFormType>
      onSubmit={onSubmit}
      title="Payment"
      isLoading={isLoading}
    >
      <PayerAccount />
      <Amount />
      <PayeeAccount />
      <Payee />
      <Purpose />
    </Form>
  );
};

export default PaymentForm;

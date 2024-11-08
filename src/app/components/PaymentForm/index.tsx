import React from 'react';
import { Amount } from 'app/common/AppInput/Amount';
import { PayerAccount } from 'app/common/AppInput/PayerAccount';
import { PayeeAccount } from 'app/common/AppInput/PayeeAccount';
import { Purpose } from 'app/common/AppInput/Purpose';
import { Payee } from 'app/common/AppInput/Payee';
import Form from 'app/common/Form';
import './styles.css';

interface FormData {
  payerAccount: string;
  amount: number;
  payeeAccount: string;
  purpose: string;
}

const PaymentForm: React.FC = () => {
  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
  };

  return (
    <Form<FormData> onSubmit={onSubmit} title="Payment">
      <PayerAccount />
      <Amount />
      <PayeeAccount />
      <Payee />
      <Purpose />
    </Form>
  );
};

export default PaymentForm;

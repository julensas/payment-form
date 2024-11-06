import React from 'react';
import './styles.css';
import Number from '../../common/FormInput/Number';
import Text from '../../common/FormInput/Text';
import TextArea from '../../common/FormInput/TextArea';
import Select from '../../common/FormInput/Select';
import Form from '../../common/Form';
import validationSchema from './validation';

const payerAccounts = [
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
];

interface FormData {
  amount: number;
}

const PaymentForm: React.FC = () => {
  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
  };

  return (
    <Form<FormData>
      onSubmit={onSubmit}
      title="Payment"
      schema={validationSchema}
    >
      <Number
        name="amount"
        label="Amount"
        placeholder="Enter amount"
        required
        min={0.01}
        max={1000}
      />
      <Text
        name="payeeAccount"
        label="Payee Account"
        placeholder="Enter amount"
        required
      />
      <TextArea
        name="purpose"
        label="Purpose"
        placeholder="Enter purpose"
        maxLength={135}
        required
      />
      <Select
        name="payerAccount"
        label="Payer Account"
        placeholder="Select payer account"
        options={payerAccounts.map((account) => ({
          value: account.id,
          label: `${account.iban} (Balance: ${account.balance})`,
        }))}
        required
      />
      <Text
        name="payee"
        label="Payee"
        placeholder="Enter payee name"
        maxLength={70}
        required
      />
    </Form>
  );
};

export default PaymentForm;

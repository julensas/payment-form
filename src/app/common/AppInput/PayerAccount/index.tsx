import { ValidateResult } from 'react-hook-form';
import { useAppSelector } from 'store/configureStore';
import { selectPayerAccounts } from 'app/components/PaymentForm/slice/selectors';
import { Select } from 'app/common/Form/FormInput/Select';

export function PayerAccount() {
  const payerAccounts = useAppSelector(selectPayerAccounts);

  const validate = (
    value: string
  ): ValidateResult | Promise<ValidateResult> => {
    if (!value || typeof value !== 'string') {
      return 'Payer account is required';
    }
    return true;
  };

  return (
    <Select
      name="payerAccount"
      label="Payer Account"
      placeholder="Select payer account"
      options={payerAccounts.map((account) => ({
        value: account.id,
        label: `${account.iban} (Balance: ${account.balance})`,
      }))}
      required
      rules={{
        validate,
      }}
    />
  );
}

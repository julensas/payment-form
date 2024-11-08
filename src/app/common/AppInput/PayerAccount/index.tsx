import { ValidateResult } from 'react-hook-form';
import { useAppSelector } from 'store/configureStore';
import { selectPayerAccounts } from 'app/slice/selectors';
import { Select } from 'app/common/Form/FormInput/Select';
import { useCurrency } from 'hooks/useCurrency';

export function PayerAccount() {
  const payerAccounts = useAppSelector(selectPayerAccounts);
  const { formatCurrency } = useCurrency();

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
        label: `${account.iban} (Balance: ${formatCurrency(account.balance)})`,
      }))}
      required
      rules={{
        validate,
      }}
    />
  );
}

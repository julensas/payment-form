import { Number } from 'app/common/Form/FormInput/Number';
import { useWatch, ValidateResult } from 'react-hook-form';
import { useAppSelector } from 'store/configureStore';
import { selectBalanceByAccountId } from 'app/slice/selectors';
import { useCurrency } from 'hooks/useCurrency';

export function Amount() {
  const payerAccount = useWatch({ name: 'payerAccount' }) as string | undefined;
  const balance = useAppSelector(selectBalanceByAccountId(payerAccount));
  const { formatCurrency } = useCurrency();

  const validate = (
    value: number
  ): ValidateResult | Promise<ValidateResult> => {
    if (value === undefined || value === null) {
      return 'Please enter the amount';
    }
    if (value < 0.01) {
      return 'Amount must be at least 0.01';
    }
    if (balance !== undefined && value > balance) {
      return `Amount cannot exceed the account balance of ${formatCurrency(balance)}`;
    }
    return true;
  };

  return (
    <Number
      name="amount"
      label="Amount"
      placeholder="Enter amount"
      required
      min={0.01}
      rules={{
        validate,
      }}
    />
  );
}

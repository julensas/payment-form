import { Text } from 'app/common/Form/FormInput/Text';
import { ValidateResult } from 'react-hook-form';

export function PayeeAccount() {
  const validate = (
    value: number
  ): ValidateResult | Promise<ValidateResult> => {
    if (value === undefined || value === null) {
      return 'Please enter the payee account';
    }
    return true;
  };

  return (
    <Text
      name="payeeAccount"
      label="Payee Account"
      placeholder="Enter payee account"
      required
      rules={{
        validate,
      }}
    />
  );
}

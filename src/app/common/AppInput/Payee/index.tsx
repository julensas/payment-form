import { Text } from 'app/common/Form/FormInput/Text';
import { ValidateResult } from 'react-hook-form';

export function Payee() {
  const validate = (
    value: string | undefined
  ): ValidateResult | Promise<ValidateResult> => {
    if (value === undefined || value === null || value === '') {
      return 'Please enter payee name';
    }

    if (value.length > 70) {
      return 'Payee name must be at most 70 characters long';
    }

    return true;
  };

  return (
    <Text
      name="payee"
      label="Payee"
      placeholder="Enter payee name"
      maxLength={70}
      required
      rules={{
        validate,
      }}
    />
  );
}

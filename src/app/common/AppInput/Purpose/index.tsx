import { TextArea } from 'app/common/Form/FormInput/TextArea';
import { ValidateResult } from 'react-hook-form';

export function Purpose() {
  const validate = (
    value: string | undefined
  ): ValidateResult | Promise<ValidateResult> => {
    if (value === undefined || value === null || value === '') {
      return 'Please enter purpose.';
    }

    if (value.length < 3) {
      return 'Purpose must be at least 3 characters long';
    }

    if (value.length > 135) {
      return 'Purpose must be at most 135 characters long';
    }

    return true;
  };

  return (
    <TextArea
      name="purpose"
      label="Purpose"
      placeholder="Enter purpose"
      required
      rules={{
        validate,
      }}
    />
  );
}

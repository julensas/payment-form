import React from 'react';
import { Input, InputProps } from 'antd';
import FormController from '../../FormController';
import { FormInputProps } from '../types';

export const Text: React.FC<InputProps & FormInputProps> = ({
  name,
  label,
  required = false,
  rules,
  ...props
}) => {
  return (
    <FormController
      name={name}
      label={label}
      required={required}
      rules={rules}
      render={({ field, isInvalid }) => (
        <Input {...field} {...props} status={isInvalid ? 'error' : ''} />
      )}
    />
  );
};

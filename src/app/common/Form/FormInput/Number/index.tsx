import React from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import FormController from '../../FormController';
import { FormInputProps } from '../types';

export const Number: React.FC<InputNumberProps & FormInputProps> = ({
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
      rules={rules}
      required={required}
      render={({ field, isInvalid }) => (
        <InputNumber
          {...field}
          {...props}
          status={isInvalid ? 'error' : ''}
          style={{ width: '100%' }}
        />
      )}
    />
  );
};

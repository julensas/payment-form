import React from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import FormController from '../FormController';
import { FormInputProps } from './types';

const Number: React.FC<InputNumberProps & FormInputProps> = ({
  name,
  label,
  required = false,
  ...props
}) => {
  return (
    <FormController
      name={name}
      label={label}
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

export default Number;

import React from 'react';
import { Input, InputProps } from 'antd';
import FormController from '../FormController';
import { FormInputProps } from './types';

const Text: React.FC<InputProps & FormInputProps> = ({
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
        <Input {...field} {...props} status={isInvalid ? 'error' : ''} />
      )}
    />
  );
};

export default Text;

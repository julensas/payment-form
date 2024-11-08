import React from 'react';
import { Input } from 'antd';
import FormController from '../../FormController';
import { FormInputProps } from '../types';

type TextAreaProps = React.ComponentProps<typeof Input.TextArea> &
  FormInputProps;

export const TextArea: React.FC<TextAreaProps> = ({
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
        <Input.TextArea
          {...field}
          {...props}
          status={isInvalid ? 'error' : ''}
        />
      )}
    />
  );
};

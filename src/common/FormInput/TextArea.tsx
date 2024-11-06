import React from 'react';
import { Input } from 'antd';
import FormController from '../FormController';
import { FormInputProps } from './types';

type TextAreaProps = React.ComponentProps<typeof Input.TextArea> &
  FormInputProps;

const TextArea: React.FC<TextAreaProps> = ({
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
        <Input.TextArea
          {...field}
          {...props}
          status={isInvalid ? 'error' : ''}
        />
      )}
    />
  );
};

export default TextArea;

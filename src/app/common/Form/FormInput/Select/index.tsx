import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import FormController from '../../FormController';
import { FormInputProps } from '../types';

const { Option } = AntSelect;

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends AntSelectProps, FormInputProps {
  options: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  rules,
  required = false,
  ...props
}) => {
  return (
    <FormController
      name={name}
      label={label}
      rules={rules}
      required={required}
      render={({ field, isInvalid }) => (
        <AntSelect {...field} {...props} status={isInvalid ? 'error' : ''}>
          {options.map(({ value, label }) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          ))}
        </AntSelect>
      )}
    />
  );
};

// FormController.tsx
import React from 'react';
import {
  useController,
  ControllerRenderProps,
  UseControllerProps,
  FieldValues,
  Path,
} from 'react-hook-form';
import { Form } from 'antd';

interface FormControllerProps<TFieldValues extends FieldValues>
  extends UseControllerProps<TFieldValues> {
  name: Path<TFieldValues>;
  label?: string;
  required?: boolean;
  render?: (args: {
    field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>;
    isInvalid: boolean;
    errorMessage?: string;
  }) => React.ReactElement;
}

const FormController = <TFieldValues extends FieldValues>({
  name,
  label,
  render,
  required,
  rules,
}: FormControllerProps<TFieldValues>) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    rules,
  });

  return (
    <Form.Item
      label={label}
      validateStatus={invalid ? 'error' : ''}
      help={invalid && error ? error.message : ''}
      required={required}
    >
      {render
        ? render({ field, isInvalid: invalid, errorMessage: error?.message })
        : null}
    </Form.Item>
  );
};

export default FormController;

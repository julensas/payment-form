import React from 'react';
import { Form as AntdForm, Button, Typography } from 'antd';
import {
  useForm,
  FormProvider,
  FieldValues,
  UseFormProps,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';

const { Title } = Typography;

interface FormProps<T extends FieldValues> extends UseFormProps<T> {
  onSubmit: (formData: T) => void;
  children: React.ReactNode;
  schema: ZodSchema<T>;
  title?: string;
  submitLabel?: string;
}

const Form = <T extends FieldValues>({
  onSubmit,
  defaultValues,
  children,
  schema,
  title,
  submitLabel,
}: FormProps<T>) => {
  const methods = useForm<T>({
    defaultValues,
    mode: 'all',
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <AntdForm
        onFinish={methods.handleSubmit(onSubmit)}
        layout="vertical"
        className="form"
      >
        {title && (
          <Title level={3} className="form-title">
            {title}
          </Title>
        )}
        {children}
        <AntdForm.Item>
          <Button type="primary" htmlType="submit">
            {submitLabel ?? 'Submit'}
          </Button>
        </AntdForm.Item>
      </AntdForm>
    </FormProvider>
  );
};

export default Form;

import React from 'react';
import { Form as AntdForm, Button, Typography } from 'antd';
import {
  useForm,
  FormProvider,
  FieldValues,
  UseFormProps,
} from 'react-hook-form';

const { Title } = Typography;

interface FormProps<T extends FieldValues> extends UseFormProps<T> {
  onSubmit: (formData: T) => void;
  children: React.ReactNode;
  title?: string;
  submitLabel?: string;
}

const Form = <T extends FieldValues>({
  onSubmit,
  defaultValues,
  children,
  title,
  submitLabel,
}: FormProps<T>) => {
  const methods = useForm<T>({
    defaultValues,
    mode: 'all',
  });

  return (
    <FormProvider {...methods}>
      <AntdForm
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            {submitLabel ?? 'Submit'}
          </Button>
        </AntdForm.Item>
      </AntdForm>
    </FormProvider>
  );
};

export default Form;

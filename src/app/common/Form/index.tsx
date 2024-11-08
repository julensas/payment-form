import React, { useEffect } from 'react';
import { Form as AntdForm, Button, Typography } from 'antd';
import {
  useForm,
  FormProvider,
  FieldValues,
  UseFormProps,
  FieldPath,
} from 'react-hook-form';
import { useAppSelector } from 'store/configureStore';
import { selectError } from 'app/slice/selectors';

const { Title } = Typography;

interface FormProps<T extends FieldValues> extends UseFormProps<T> {
  onSubmit: (formData: T) => void;
  children: React.ReactNode;
  isLoading: boolean;
  title?: string;
  submitLabel?: string;
}

const Form = <T extends FieldValues>({
  onSubmit,
  defaultValues,
  children,
  title,
  submitLabel,
  isLoading,
}: FormProps<T>) => {
  const error = useAppSelector(selectError);
  const methods = useForm<T>({
    defaultValues,
    mode: 'all',
  });

  useEffect(() => {
    if (error) {
      methods.setError(
        'payeeAccount' as FieldPath<T>,
        { message: error },
        { shouldFocus: true }
      );
    }
  }, [error, methods]);

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
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
            disabled={isLoading}
            loading={isLoading}
          >
            {submitLabel ?? 'Submit'}
          </Button>
        </AntdForm.Item>
      </AntdForm>
    </FormProvider>
  );
};

export default Form;

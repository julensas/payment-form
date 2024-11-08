import { UseControllerProps } from 'react-hook-form';

interface FormInputProps extends UseControllerProps {
  name: string;
  label: string;
  required?: boolean;
}

export type { FormInputProps };

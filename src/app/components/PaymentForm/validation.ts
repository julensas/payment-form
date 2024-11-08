import { z } from 'zod';

const validationSchema = z.object({
  amount: z
    .number({ message: 'Please enter a valid number' })
    .min(0.01, 'Amount must be at least 0.01')
    .refine((val) => val !== undefined, 'Please enter an amount'),

  payeeAccount: z
    .string({ message: 'Please enter the payee account' })
    .min(1, 'Please enter the payee account'),

  purpose: z
    .string({ message: 'Please enter the purpose' })
    .min(3, 'Purpose must be at least 3 characters')
    .max(135, 'Purpose cannot exceed 135 characters')
    .min(1, 'Please enter the purpose'),

  payerAccount: z
    .string({ message: 'Please select a payer account' })
    .min(1, 'Please select a payer account'),

  payee: z
    .string({ message: 'Please enter the payee' })
    .max(70, 'Payee cannot exceed 70 characters')
    .min(1, 'Please enter the payee'),
});

export default validationSchema;

import IMask from 'imask';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'app/slice/selectors';
import { Language } from 'types';

export const useCurrency = () => {
  const language = useSelector(selectLanguage);

  const currencySymbol = '€';
  const mask = `${currencySymbol} num`;
  let delimiter = ',';
  let radix = '.';

  if (language === Language.LT) {
    delimiter = ' ';
    radix = ',';
  }

  const formatCurrency = (value: string | number): string => {
    if (!value && value !== 0) return '';

    return IMask.pipe(value.toString().replace('.', radix), {
      mask: [
        { mask: '' },
        {
          mask,
          lazy: false,
          blocks: {
            num: {
              mask: Number,
              scale: 2,
              thousandsSeparator: delimiter,
              padFractionalZeros: true,
              radix: radix,
              mapToRadix: ['.', radix],
            },
          },
        },
      ],
    });
  };

  return { formatCurrency };
};

import React from 'react';
import { Select } from 'antd';
import { Language } from 'types';
import { useAppDispatch, useAppSelector } from 'store/configureStore';
import { appActions } from 'app/slice';
import { selectLanguage } from 'app/slice/selectors';

const Option = Select.Option;

const LocaleSelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector(selectLanguage);
  const onChange = (value: Language) => {
    dispatch(appActions.selectlanguage(value));
  };

  return (
    <Select onChange={onChange} style={{ width: 200 }} value={language}>
      <Option value={Language.EN}>English</Option>
      <Option value={Language.LT}>Lithuania</Option>
    </Select>
  );
};

export default LocaleSelect;

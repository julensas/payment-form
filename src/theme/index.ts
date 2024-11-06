import { ThemeConfig } from 'antd';

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: '#3a7bd5',
    colorBgBase: '#ffffff',
    colorTextBase: '#333333',
    colorBgContainer: '#f5f5f5',
    colorBorder: '#d9d9d9',
  },
  components: {
    Select: {
      optionSelectedBg: '#3a7bd5',
    },
  },
  cssVar: true,
};

export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: '#b87333',
    colorBgBase: '#1f1f1f',
    colorTextBase: '#e8e8e8',
    colorBgContainer: '#2b2b2b',
    colorBorder: '#444444',
  },
  components: {
    Select: {
      optionSelectedBg: '#b87333',
    },
  },
  cssVar: true,
};

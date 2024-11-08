import React from 'react';
import { Switch } from 'antd';
import { useTheme } from 'context/ThemeContext';

const ThemeSwitch: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-switch-container">
      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
    </div>
  );
};

export default ThemeSwitch;

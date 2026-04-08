import React from 'react';
import { useTheme } from './context/ThemeContext';
import './index.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-container">
      <h1>Giao diện hiện tại: {theme === 'light' ? 'Sáng ' : 'Tối '}</h1>
      
      <button onClick={toggleTheme}>
        Đổi sang chế độ {theme === 'light' ? 'Tối ' : 'Sáng '}
      </button>

      <p>
        F5 tải lại trang, trạng thái vẫn sẽ được ghi nhớ nhờ localStorage!
      </p>
    </div>
  );
}

export default App;

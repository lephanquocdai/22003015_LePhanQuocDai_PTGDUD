import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import './index.css'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Profile />
        <div className="info-box">
          <h3>Hướng dẫn</h3>
          <p>1. Bấm Đăng nhập (giả lập) ở góc phải trên cùng.</p>
          <p>2. Profile sẽ lập tức cập nhật thông tin User dựa trên Global State.</p>
        </div>
      </main>
    </div>
  );
}

export default App;

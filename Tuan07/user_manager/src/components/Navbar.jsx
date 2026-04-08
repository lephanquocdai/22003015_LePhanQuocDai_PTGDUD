import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, login, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>Ứng Dụng</h2>
      <div className="auth-box">
        {user ? (
          <>
            <span className="welcome">Xin chào, <strong>{user.name}</strong></span>
            <button className="btn logout-btn" onClick={logout}>Đăng xuất</button>
          </>
        ) : (
          <button className="btn login-btn" onClick={() => login('Nguyễn Văn A')}>Đăng nhập giả lập</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

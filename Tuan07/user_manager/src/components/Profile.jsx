import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-card">
      <h3>Trang cá nhân</h3>
      {user ? (
        <div className="user-info">
          <p>Tên tài khoản: <span className="highlight">{user.name}</span></p>
          <p>Vai trò: <span className="highlight">{user.role}</span></p>
        </div>
      ) : (
        <p className="not-logged-in">Vui lòng đăng nhập trên thanh điều hướng để xem thông tin cá nhân.</p>
      )}
    </div>
  );
};

export default Profile;

import React, { createContext, useState, useContext } from 'react';

// 1. Tạo Context
const CountContext = createContext();

// 2. Tạo Provider để bao bọc các component con
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  // Truyền count, increment, decrement xuống các component con
  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

// 3. Custom Hook (Tuỳ chọn) giúp dùng context dễ hơn
export const useCount = () => {
  return useContext(CountContext);
};

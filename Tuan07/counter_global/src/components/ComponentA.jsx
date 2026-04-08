import React from 'react';
import { useRecoilValue } from 'recoil';
import { countAtom } from '../store/countAtom';

const ComponentA = () => {
  // Đọc global state `count` từ Recoil (chỉ đọc)
  const count = useRecoilValue(countAtom);

  return (
    <div className="component-a card">
      <h2>Component A</h2>
      <div className="count-display">{count}</div>
    </div>
  );
};

export default ComponentA;

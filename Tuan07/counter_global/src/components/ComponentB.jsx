import { useSetRecoilState } from 'recoil';
import { countAtom } from '../store/countAtom';

const ComponentB = () => {
  // Lấy hàm thay đổi state từ Recoil (chỉ thay đổi, không cần render lại khi state đổi)
  const setCount = useSetRecoilState(countAtom);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div className="component-b card">
      <h2>Component B</h2>
      <div className="controls">
        <button className="btn decrease" onClick={decrement}>- Giảm</button>
        <button className="btn increase" onClick={increment}>+ Tăng</button>
      </div>
    </div>
  );
};

export default ComponentB;

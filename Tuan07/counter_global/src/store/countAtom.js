import { atom } from 'recoil';

// Khởi tạo một Atom (đóng vai trò như một mảnh nhỏ của Global State)
export const countAtom = atom({
  key: 'countAtom', // ID duy nhất (yêu cầu để nhận diện nội bộ của Recoil)
  default: 0, // Giá trị mặc định ban đầu
});

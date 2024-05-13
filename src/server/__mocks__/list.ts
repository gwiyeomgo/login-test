export interface Member {
  name: string;
  code: string;
}
export interface Item {
  id: number;
  content: string;
  memberInfo: Member;
  bookmarked?: boolean;
}
export const originList: Item[] = [
  {
    id: 1,
    content:'게시글1',
    memberInfo: { name: '김김김', code: '1' },
    bookmarked: true,
  },
  {
    id: 2,
    content:'게시글2',
    memberInfo: { name: '박박박', code: '2' },
    bookmarked: false,
  },
  {
    id: 3,
    content:'게시글3',
    memberInfo: { name: '고고고', code: '3' },
    bookmarked: false,
  },
];

export interface Bank {
  name: string;
  code: string;
}
export interface Account {
  id: number;
  nickName: string;
  accountNumber: string;
  bankInfo: Bank;
  bookmarked?: boolean;
}


export const originAccountList: Account[] = [
  {
    id: 1,
    nickName: '입출금 통장',
    accountNumber: '1000-000-0000',
    bankInfo: { name: '토스뱅크', code: '10' },
    bookmarked: true,
  },
  {
    id: 2,
    nickName: '자유 입출금 계좌',
    accountNumber: '1000-000-0000',
    bankInfo: { name: '민규뱅크', code: '20' },
    bookmarked: false,
  },
  {
    id: 3,
    nickName: '모임통장',
    accountNumber: '1000-000-0000',
    bankInfo: { name: '선진뱅크', code: '30' },
    bookmarked: false,
  },
];

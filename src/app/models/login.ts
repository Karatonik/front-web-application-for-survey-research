export interface Login {
  email: string;
  password: string;
}
export interface Award {
  name: string;
  cost: number;
  localDateTime: string;
}
export  interface Reward {
  name: string;
  cost: number;
  quantity: number;
}
export  interface UserInfo {
  email: string;
  points: number;
  activated: boolean;
  accountType: string;
}

import { Ong } from "./ong";
export interface Usuario {
  email: string;
  password: string;
  confirmPassword: string;
  ong: Ong;
}
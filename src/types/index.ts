import { UserCredential } from "firebase/auth";

type User = {
    uid:string;
    email:string;
    displayName:string;
}
export type AuthValue = {
  user: User | null;
  signup: ((email: string, password: string) => Promise<UserCredential>)| (() => Promise<void>);
  login: ((email: string, password: string) => Promise<UserCredential>) | (() => Promise<void>);
  logout: (() => Promise<void> );
}
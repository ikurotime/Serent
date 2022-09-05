import { UserCredential } from "firebase/auth";
export type State = {
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  roomId: string | null;
}
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
  store: State | null;
  dispatch:any;
}
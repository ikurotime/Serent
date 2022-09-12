export type State = {
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  room: { roomId: string; roomRef: any } | null;
  pageName: string;
};
type User = {
  uid: string;
  email: string;
  displayName: string;
};
export type AuthValue = {
  user: User | null;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  store: State | null;
  dispatch: any;
};

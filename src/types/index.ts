export type Room = {
  id?: string;
  title: any;
  description?: string;
  image?: string;
};
export type dbRoom = {
  id: string;
  created_at: string;
  room_name: string;
  user_id: string;
  room_bg_image: string;
};
export type State = {
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  room: dbRoom | null;
  pageName: string;
};
type User = {
  id: string;
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
  setLoading: (loading: boolean) => void;
};

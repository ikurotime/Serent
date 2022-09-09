import { State } from '@/types';

export const initialStore = {
  localStream: null,
  remoteStream: null,
  room: null
};

const storeReducer = (state: State, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'SET_LOCAL_STREAM':
      return { ...state, localStream: action.payload };
    case 'SET_REMOTE_STREAM':
      return { ...state, remoteStream: action.payload };
    case 'SET_ROOM':
      return { ...state, room: action.payload };
    default:
      return state;
  }
};
export default storeReducer;

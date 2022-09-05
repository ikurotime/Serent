import { State } from "@/types";

export const initialStore = {
  localStream: null,
  remoteStream: null,
  roomId: null
}

const storeReducer = (state: State, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case "SET_LOCAL_STREAM":
      return { ...state, localStream: action.payload };
    case "SET_REMOTE_STREAM":
      return { ...state, remoteStream: action.payload };
    case "SET_ROOM_ID":
      return { ...state, roomId: action.payload };
    default:
      return state;
  }
}
export default storeReducer
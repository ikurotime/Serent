import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseClient";

export const servers = {
  iceServers: [
    {
      urls: [
        'stun:stun1.l.google.com:19302',
        'stun:stun2.l.google.com:19302'
      ]
    },
  ],
  iceCandidatePoolSize: 10
}
export const peerConnection = new RTCPeerConnection(servers) 

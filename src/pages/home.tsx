import { db } from '@/firebase/firebaseClient';
import { peerConnection } from '@/firebase/webRTC';
import { Button } from '@nextui-org/react';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const createRoom = async () => {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    const roomWithOffer = {
      offer: {
        type: offer.type,
        sdp: offer.sdp
      }
    };
    const roomRef = await addDoc(collection(db, 'rooms'), roomWithOffer);
    const roomId = roomRef.id;
    const roomUrl = `/room/${roomId}`;
    navigate(roomUrl);
    // dispatch({ type: "SET_ROOM_ID", payload: roomId });
  };
  return (
    <div className="text-center">
      <h1>Home</h1>
      <p>Create and share your virtual room </p>
      <Button auto onClick={createRoom}>
        Create a room
      </Button>
    </div>
  );
}

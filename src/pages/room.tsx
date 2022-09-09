import { AuthContext } from '@/context/AuthContext';

import { useContext, useEffect } from 'preact/hooks';
import { useParams } from 'react-router-dom';
type Props = {};

export default function Room(props: Props) {
  const { id } = useParams();
  const { store } = useContext(AuthContext);
  console.log(store?.room);

  useEffect(() => {
    const unsubscribe = () => {
      console.log(store?.room?.roomRef);
      // @ts-ignore

      /* store?.room?.roomRef. onSnapshot (async (snapshot: { data: () => any }) => {
        console.log('Got updated room:', snapshot.data());
        const data = snapshot.data();
        if (!peerConnection.currentRemoteDescription && data.answer) {
          console.log('Set remote description: ', data.answer);
          const answer = new RTCSessionDescription(data.answer);
          await peerConnection.setRemoteDescription(answer);
        }
      }); */
    };
    unsubscribe();
  });
  return <div>Room ID: {id} </div>;
}

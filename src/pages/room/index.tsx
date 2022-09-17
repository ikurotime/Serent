import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/supabase/clientSupabase';
import { Card, Container, Text } from '@nextui-org/react';
import { useEffect, useState } from 'preact/hooks';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

export default function Room() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { store, dispatch } = useAuth();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (store?.room?.id == null) {
      console.log(params?.id);
      supabase
        .from('rooms')
        .select('*')
        .eq('id', params?.id)
        .then(({ data, error }) => {
          if (error) throw new Error(error.message);
          dispatch({
            type: 'SET_ROOM',
            payload: data?.[0]
          });
        });
    }
    window.addEventListener('keydown', (e) => {
      console.log(e);
      if (e.key === ' ') {
        setIsPlaying(true);
        console.log('isPlaying', isPlaying);
      }
      if (e.key === 'p') {
        setIsPlaying(false);
        console.log('isPlaying', isPlaying);
      }
    });
  }, []);

  return (
    <div className="text-center w-full h-full relative bg-transparent z-0">
      <img
        className="absolute -z-10 w-full h-full object-cover"
        src={store?.room?.room_bg_image}
        alt=""
      />
      <Container class="overflow-hidden relative">
        <div></div>
        <Card variant="flat">
          <Card.Body>
            <Text>{store?.room?.room_name}</Text>
          </Card.Body>
        </Card>
        <p>This is your room</p>
        <div className="z-10">Now playing!!</div>
        <div className="w-full relative hidden">
          {/* @ts-ignore */}
          <ReactPlayer
            wrapper="div"
            id="id_player"
            playBackRate={1}
            config={{ youtube: { playerVars: { disablekb: 1 } } }}
            controls={false}
            class="select-none overflow-hidden absolute -z-1"
            url="https://www.youtube.com/watch?v=jfKfPfyJRdk"
            playing={isPlaying}
            light={!isPlaying}
          />
        </div>
      </Container>
    </div>
  );
}

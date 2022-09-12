import { useAuth } from '@/context/AuthContext';
import { Container } from '@nextui-org/react';
import { useEffect, useState } from 'preact/hooks';
import ReactPlayer from 'react-player';
export default function Room() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { store } = useAuth();
  // set a listener in an useEffect hook that enables the video when space key is pressed
  useEffect(() => {
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
    <div className="text-center">
      <h1>Home</h1>
      <p>This is your room</p>
      <Container class="overflow-hidden">
        {/* @ts-ignore */}
        <div className="w-full relative">
          {/* @ts-ignore */}
          <ReactPlayer
            wrapper="div"
            id="id_player"
            playBackRate={1}
            config={{ youtube: { playerVars: { disablekb: 1 } } }}
            controls={false}
            class="select-none overflow-hidden"
            url="https://www.youtube.com/embed/-9gEgshJUuY?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.lofi.cafe&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=true&color=black&enablejsapi=1&widgetid=1"
            playing={isPlaying}
            light={!isPlaying}
          />
        </div>
        <img
          className="absolute top-0 left-0 w-full h-full"
          src={store?.room?.room_bg_image}
          width={500}
          height={500}
          alt=""
        />
      </Container>
    </div>
  );
}

import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/supabase/clientSupabase';
import { dbRoom } from '@/types';
import { Button, Card, Grid, Image, Text } from '@nextui-org/react';
import { useEffect, useState } from 'preact/hooks';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

type Props = {};

export default function index(props: Props) {
  const navigate = useNavigate();
  const { user, dispatch } = useAuth();
  const [rooms, setRooms] = useState<any>([]);
  const enterRoom = async (room: dbRoom) => {
    navigate('/room/' + room.id);
    dispatch({
      type: 'SET_ROOM',
      payload: room
    });
  };
  useEffect(() => {
    const getRoomInfo = async () => {
      const { data, error } = await supabase.from('rooms').select('*').eq('user_id', user?.id);
      if (error) throw new Error(error.message);
      console.log(data);
      setRooms(data);
    };
    getRoomInfo();
  }, []);
  return (
    <div className="p-0 ">
      {rooms.length === 0 ? (
        <>
          <AiOutlinePlusCircle size={80} />
          <h2>Create your first room</h2>
          <Button
            auto
            onClick={() => {
              navigate('/home/create');
            }}>
            {' '}
            Create a room
          </Button>
        </>
      ) : (
        <Grid.Container
          css={{ overflowY: 'scroll', maxHeight: '95vh', padding: '50px' }}
          gap={2}
          justify="center">
          {rooms.map((room: dbRoom) => (
            <Grid key={room.id} xs={6} md={4} lg={3}>
              <Card
                isHoverable
                isPressable
                onPress={() => {
                  enterRoom(room);
                }}>
                <Card.Body css={{ padding: 0 }}>
                  <Image src={room.room_bg_image} alt="Default Image" objectFit="fill" />
                </Card.Body>
                <Card.Footer>
                  <div>
                    <Text h5>{room.room_name}</Text>
                    <Text h6>{room.room_name}</Text>
                  </div>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </div>
  );
}

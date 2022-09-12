import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/supabase/clientSupabase';
import { Room } from '@/types';
import { Card, Grid, Image, Text } from '@nextui-org/react';
import { BiHelpCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
type Props = {};
const TEMPLATES = [
  /*   {
    id: '1',
    title: 'Chill Café',
    description: 'A place to chill',
    image:
      'https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true'
  }, */
  {
    id: '2',
    title: '☁️ Sky',
    description: 'A place to chill',
    image:
      'https://ljgeixztpzcldgicupdn.supabase.co/storage/v1/object/sign/background-images/sky.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kLWltYWdlcy9za3kuanBlZyIsImlhdCI6MTY2Mjk1MzUxNywiZXhwIjoxOTc4MzEzNTE3fQ.YQH2GGG8BvnY6r47EY5hniilJnpekkBCI1ZdhmcHPoc'
  },
  {
    id: '3',
    title: '🌅 Sunset',
    description: 'Sunset in the sky',
    image:
      'https://ljgeixztpzcldgicupdn.supabase.co/storage/v1/object/sign/background-images/sunset.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kLWltYWdlcy9zdW5zZXQuanBlZyIsImlhdCI6MTY2Mjk1MzUzNywiZXhwIjoxOTc4MzEzNTM3fQ.-LefotCTW2art5X6xUY7hA3jh11LtQL5wlpFIHZDKO8'
  },
  {
    id: '4',
    title: '🌆 City',
    description: 'View of the city',
    image:
      'https://ljgeixztpzcldgicupdn.supabase.co/storage/v1/object/sign/background-images/city.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kLWltYWdlcy9jaXR5LmpwZWciLCJpYXQiOjE2NjI5NTM0NzIsImV4cCI6MTk3ODMxMzQ3Mn0.6xsISjBF90Ux54ZUywbCRNexXPujKSKFnoggmkcgol8'
  }
];

export default function Create(props: Props) {
  const { user, dispatch } = useAuth();
  const navigate = useNavigate();
  const createRoom = async (roomData: Room) => {
    const { data, error } = await supabase.from('rooms').insert({
      user_id: user?.id,
      room_name: roomData.title,
      room_bg_image: roomData.image
    });
    if (error) {
      console.log(error);
    }
    console.log(data);
    const { id } = data![0];
    navigate('/room/' + id);
    dispatch({
      type: 'SET_ROOM',
      payload: data![0]
    });
  };
  return (
    <div className="h-full w-full p-16 flex justify-center">
      <Card css={{ maxWidth: '80vw' }}>
        <Card.Header>
          <Text h3 className="text-black">
            📝 Select from templates{' '}
          </Text>
        </Card.Header>
        <Card.Body>
          <Text className="text-gray-600">
            Choose a room that matches your mood from the templates. Or create your from scratch!
          </Text>
          <Grid.Container gap={2} justify="center">
            <Grid xs={4}>
              <Card isHoverable isPressable>
                <Card.Body css={{ padding: 0 }}>
                  <div className="w-full h-full grid place-content-center bg-gradient-to-tr from-violet-600 to-blue-600">
                    <BiHelpCircle size={80} color="white" />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div>
                    <h5>🔃 Random</h5>
                    <h6>Let us choose for you!</h6>
                  </div>
                </Card.Footer>
              </Card>
            </Grid>
            {TEMPLATES.map((template) => (
              <Grid key={template.id} xs={4}>
                <Card
                  isHoverable
                  isPressable
                  onPress={() => {
                    createRoom(template);
                  }}>
                  <Card.Body css={{ padding: 0 }}>
                    <Image src={template.image} alt="Default Image" objectFit="fill" />
                  </Card.Body>
                  <Card.Footer>
                    <div>
                      <Text h5>{template.title}</Text>
                      <Text h6>{template.description}</Text>
                    </div>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </Card.Body>
      </Card>
      {/*  <div className="bg-white flex flex-1 h-full text-black rounded-3xl p-10 max-w-6xl">
        <h3>📝 Select from templates </h3>
      </div> */}
    </div>
  );
}

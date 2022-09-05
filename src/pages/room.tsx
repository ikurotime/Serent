import { useParams } from 'react-router-dom';
type Props = {};

export default function Room(props: Props) {
  const { id } = useParams();
  return <div>Room ID: {id} </div>;
}

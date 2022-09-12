import { Button } from '@nextui-org/react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

type Props = {};

export default function index(props: Props) {
  return (
    <>
      <AiOutlinePlusCircle size={80} />
      <h2>Create your first room</h2>
      <Button auto> Create a room</Button>
    </>
  );
}

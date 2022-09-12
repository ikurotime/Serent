import { useAuth } from '@/context/AuthContext';
import { Button } from '@nextui-org/react';
import { AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Home() {
  const { store, dispatch } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 w-full">
      <aside className="bg-gray-900 flex flex-col p-5 h-auto gap-5 ">
        <Button
          rounded
          auto
          ghost
          icon={<AiOutlineHome size={24} />}
          onClick={() => {
            navigate('/home');
            dispatch({ type: 'SET_PAGE_NAME', payload: 'Home' });
          }}
        />
        <Button
          rounded
          auto
          ghost
          icon={<TbWorld size={24} />}
          onClick={() => {
            navigate('/home/explore');
            dispatch({ type: 'SET_PAGE_NAME', payload: 'Public rooms' });
          }}
        />
        <Button rounded auto ghost icon={<AiOutlineUser size={24} />} />
      </aside>
      <div className="bg-slate-700 flex-1">
        <div className="flex justify-between flex-1 py-3 px-14 ">
          <h3 className="m-0">{store?.pageName}</h3>
          <Button auto ghost icon={<AiOutlinePlus />}>
            {' '}
            Create a room
          </Button>
        </div>
        <div className="flex justify-center h-full flex-1">
          <div className="m-auto flex flex-col items-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

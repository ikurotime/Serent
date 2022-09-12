import { useAuth } from '@/context/AuthContext';
import { Button } from '@nextui-org/react';
import { AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Home() {
  const { store, dispatch } = useAuth();
  const navigate = useNavigate();
  const handleClick = (route: string, name?: string) => {
    route && navigate(route);
    name && dispatch({ type: 'SET_PAGE_NAME', payload: name });
  };
  return (
    <div className="flex flex-1 w-full">
      <aside className="bg-gray-900 flex flex-col p-5 h-full relative w-[80px] max-h-screen">
        <div className="flex flex-col h-full gap-5 absolute top-10 left-5">
          <Button
            rounded
            auto
            ghost
            icon={<AiOutlineHome size={24} />}
            onClick={() => {
              handleClick('/home', 'Home');
            }}
          />
          <Button
            rounded
            auto
            ghost
            icon={<TbWorld size={24} />}
            onClick={() => {
              handleClick('/home/explore', 'Public rooms');
            }}
          />
          <Button rounded auto ghost icon={<AiOutlineUser size={24} />} />
        </div>
      </aside>
      <div className="bg-slate-700 flex-1">
        <div className="flex justify-between flex-1 py-3 px-14 ">
          <h3 className="m-0 text-white">{store?.pageName}</h3>
          <Button
            auto
            ghost
            icon={<AiOutlinePlus />}
            onClick={() => {
              handleClick('/home/create');
            }}>
            {' '}
            Create a room
          </Button>
        </div>
        <div className="flex justify-center h-full flex-1 overflow-y-scroll">
          <div className="m-auto flex flex-col items-center ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

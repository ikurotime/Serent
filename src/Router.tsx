import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
// Pages =>
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Home from './pages/home';
import Explore from './pages/home/explore';
import HomeIndex from './pages/home/index';
import Landing from './pages/index';
import Room from './pages/room';
type Props = {};

export const Router = (props: Props) => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />}>
          <Route path="/home" element={<HomeIndex />} />
          <Route path="/home/explore" element={<Explore />} />
        </Route>
      </Route>
      <Route path="/room/:id" element={<Room />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

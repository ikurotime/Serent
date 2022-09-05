import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
// Pages =>
import Landing from './pages/index';
import Room from './pages/room';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Home from './pages/home';

type Props = {};

export const Router = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<PublicRoute />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/room/:id" element={<Room />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

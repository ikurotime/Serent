import { useAuth } from "@/context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

type Props = {}

export default function ProtectedRoute({}: Props) {
  const { user } = useAuth()
  return user ? <Outlet/> : <Navigate to="/auth/login" />
}
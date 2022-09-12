import { ComponentChildren, createContext } from 'preact';
import { useContext, useEffect, useReducer, useState } from 'preact/hooks';
import { AuthValue } from '@/types';
import LoadingComponent from '@/components/loadingComponent';
import storeReducer, { initialStore } from './storeReducer';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/supabase/clientSupabase';
type Props = {
  children: ComponentChildren;
};

export const AuthContext = createContext<AuthValue>({
  user: null,
  signup: async () => {},
  login: async () => {},
  logout: async () => {},
  store: null,
  dispatch: null
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = (props: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [store, dispatch] = useReducer(storeReducer, initialStore);

  useEffect(() => {
    // Check active sessions and sets the user
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const signup = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password
    });
    if (error) throw new Error(error.message);
  };
  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signIn({
      email,
      password
    });
    if (error) throw new Error(error.message);
  };
  const logout = async () => {
    setUser(null);
    navigate('/');
    await supabase.auth.signOut();
  };
  return (
    <AuthContext.Provider value={{ user, signup, login, logout, store, dispatch }}>
      {!loading ? props.children : <LoadingComponent />}
    </AuthContext.Provider>
  );
};

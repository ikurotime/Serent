import { ComponentChildren, createContext } from "preact"
import { useContext, useEffect, useReducer, useState } from "preact/hooks"
import { onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth'
import { auth } from "@/firebase/firebaseClient"
import { AuthValue } from "@/types"
import LoadingComponent from "@/components/loadingComponent"
import storeReducer, { initialStore } from "./storeReducer"
type Props = {
  children: ComponentChildren
}

export const AuthContext = createContext<AuthValue>({user: null, signup: async () => {},  login: async () => {}, logout: async () => {},store: null,dispatch:null})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = (props: Props) => {

  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [ store, dispatch ] = useReducer(storeReducer, initialStore)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
     if(user){
      setUser({
        uid: user?.uid,
        email: user?.email,
        displayName: user?.displayName,
      })
     }else{
      setUser(null)
     }
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  } , [])

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }
  return (
    <AuthContext.Provider value={{user, signup , login , logout,store,dispatch}}>
      {!loading ? props.children : (<LoadingComponent/>)}
    </AuthContext.Provider>
  )
}
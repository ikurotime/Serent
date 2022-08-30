import { ComponentChildren, createContext } from "preact"
import { useContext, useEffect, useState } from "preact/hooks"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "@/firebase/firebaseClient"
type Props = {
  children: ComponentChildren
}
type User = {
  user: {
    uid:string;
    email:string;
    displayName:string;
  }
}
type AuthValue = {
  user: User | null;
}
const AuthContext = createContext<AuthValue>({user: null})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = (props: Props) => {
  const [user, setUser] = useState<any>(null)
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
    })
    return () => {
      unsubscribe()
    }
  } , [])

  return (
    <AuthContext.Provider value={{user}}>
      {props.children}
    </AuthContext.Provider>
  )
}
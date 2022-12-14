import { ComponentChildren, createContext } from "preact"
import { useContext, useEffect, useState } from "preact/hooks"
import { onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth'
import { auth } from "@/firebase/firebaseClient"
import { AuthValue } from "@/types"
type Props = {
  children: ComponentChildren
}

const AuthContext = createContext<AuthValue>({user: null, signup: async () => {},  login: async () => {}, logout: async () => {}})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = (props: Props) => {

  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      console.log(user)
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
    console.log("logout")
    setUser(null)
    await signOut(auth)
  }
  return (
    <AuthContext.Provider value={{user, signup , login , logout}}>
      {!loading && props.children}
    </AuthContext.Provider>
  )
}
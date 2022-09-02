
import { useAuth } from "@/context/AuthContext";
import { Button, Input, Navbar, Text } from "@nextui-org/react";
import { useState } from "preact/hooks"

export default function Login() {

  const { user, login } = useAuth()
  console.log(user)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  //set a onChangeValue function to update the formData state
  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password)
    } catch (err: unknown) {
     if(err instanceof Error){
      throw Error(err?.message)
     }
    }
    console.log(formData);
  }
  return (
    <>
    <Text h1>login</Text>
      
    <form class="flex flex-col gap-3 m-3" onSubmit={handleLogin}>
    <Input name="email" onChange={onChange} type="text" />
    <Input name="password" onChange={onChange} type="password" />
    <Button>Submit</Button>
    </form>
    </>
  )
}

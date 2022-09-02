import { useAuth } from "@/context/AuthContext";
import { Button, Input } from "@nextui-org/react";
import { useState } from "preact/hooks"

export default function Register() {

  const { signup } = useAuth()
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
  const handleSignUp = async (e: any) => {
    e.preventDefault();
    try {
      await signup(formData.email, formData.password)
    } catch (err: unknown) {
     if(err instanceof Error){
      throw Error(err?.message)
     }
    }
  }
  return (
    <>
    <h1>Register</h1>
    <form class="flex flex-col gap-3 m-3" onSubmit={handleSignUp}>
    <Input name="email" onChange={onChange} type="text" />
    <Input name="password" onChange={onChange} type="password" />
    <Button color='primary'>Submit</Button>
    </form>
    </>
  )
}

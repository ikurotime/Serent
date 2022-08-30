import { useAuth } from "@/context/AuthContext";
import { useState } from "preact/hooks"

export default function Login() {

  const { user } = useAuth()
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
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <>
    <h1>login</h1>
    <form class="flex flex-col gap-3 m-3" onSubmit={handleSubmit}>
    <input name="email" onChange={onChange} type="text" />
    <input name="password" onChange={onChange} type="password" />
    <button>Submit</button>
    </form>
    </>
  )
}

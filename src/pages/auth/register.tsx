import { useAuth } from '@/context/AuthContext';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'preact/hooks';

export default function Register() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  });
  // set a onChangeValue function to update the formData state
  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSignUp = async (e: any) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      return alert('Password must be at least 6 characters long');
    }
    if (formData.password !== formData.passwordConfirm) {
      return alert('Passwords do not match');
    }
    try {
      await signup(formData.email, formData.password);
      /*   const userData = {
        email: formData.email,
        rooms: [],
        friends: []
      };
      addDoc(collection(db, 'users'), userData); */
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw Error(err?.message);
      }
    }
  };
  return (
    <>
      <h1>Register</h1>
      <form className="flex flex-col gap-3 m-3" onSubmit={handleSignUp}>
        <Input name="email" onChange={onChange} type="text" />
        <Input name="password" onChange={onChange} type="password" />
        <Input name="passwordConfirm" onChange={onChange} type="password" />
        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

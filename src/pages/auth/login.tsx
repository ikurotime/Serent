import { useAuth } from '@/context/AuthContext';
import { Button, Input, Loading, Text } from '@nextui-org/react';
import { useState } from 'preact/hooks';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  // set a onChangeValue function to update the formData state
  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleLogin = async (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw Error(err?.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Text h1>login</Text>

      <form className="flex flex-col gap-3 m-3" onSubmit={handleLogin}>
        <Input name="email" onChange={onChange} type="text" />
        <Input name="password" onChange={onChange} type="password" />
        <Button type="submit" auto bordered disabled={loading}>
          {loading ? <Loading type="points" color="currentColor" size="sm" /> : 'Submit'}
        </Button>
      </form>
    </>
  );
}

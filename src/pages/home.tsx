import { useState } from "preact/hooks";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <h1>Serent</h1>
    <p>Create and share your virtual room </p>
    </>
  );
};

export default Home;

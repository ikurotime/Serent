export default async function userLogIn(userName: string, password: string) {
  const response = await fetch(`${process.env.VITE_URL}/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      password,
    }),
  });
  const data = await response.json();
  return data;
}
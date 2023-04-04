import directus from "@/directus";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [me, setMe] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const me = await directus.users.me.read();
        setMe(me);
      } catch (error) {
        if (error.message.includes("Invalid")) {
          setError("Wrong username or password.");
        } else if (!error.message.includes("refresh_token"))
          setError(error.message);
      }
    };
    getUserInfo();
  }, []);

  return (
    <>
      <Head>
        <title>Directus CMS App</title>
        <meta name="description" content="Directus CMS App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      {!me && <h1>Home</h1>}
      {me && <h2>Hello, {`${me.first_name} ${me.last_name}`}</h2>}
      {error && <p>{error}</p>}
    </>
  );
}

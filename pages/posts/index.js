"use client";
import { useState, useEffect } from "react";
import Post from "../components/Post";
import useFetchItems from "@/hooks/useFetchItems";
import { useRouter } from "next/router";

export default function PostsList() {
  const [posts, setPosts] = useState(null);
  const [fetchError, setFetchError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const publicData = async () => {
      const { data, error } = await useFetchItems("posts");

      if (data) setPosts(data);

      if (error) {
        if (error.message.includes("refresh_token")) {
          router.push("/");
        } else {
          setFetchError(error.message);
          setTimeout(() => {
            setFetchError("");
          }, 2000);
        }
      }
    };

    publicData();
  }, []);

  return (
    <>
      {!posts && !fetchError && <p>Loading...</p>}
      {fetchError && <p>{fetchError}</p>}
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

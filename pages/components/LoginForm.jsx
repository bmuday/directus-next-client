"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useLogin from "@/hooks/useLogin";
import { useUserStore } from "@/stores";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userData, error } = await useLogin({ email, password });

    if (userData) {
      setUser(userData);
      setSuccess("Connexion...");
      setTimeout(() => {
        setSuccess("");
        router.push("/products");
      }, 2000);
    }
    if (error) {
      if (error.message.includes("Invalid")) {
        setError("Wrong username or password.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form onSubmit={handleSubmit} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Email</label>
            <input
              type="text"
              name="email"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Login
          </button>
        </div>
        {success && <p>{success}</p>}
        {error && <p>{error}</p>}
      </form>
      <button className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow">
        <Link href="/register">Register</Link>
      </button>
    </div>
  );
};

export default LoginForm;

import useLogout from "@/hooks/useLogout";
import Link from "next/link";
import { useUserStore, useSettingsStore } from "@/stores";
import { useState } from "react";
import { useRouter } from "next/router";
import { useLogoutStore } from "@/stores";

export default function Header() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const dark = useSettingsStore((state) => state.dark);
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const setError = useLogoutStore((state) => state.setError);

  const logout = async () => {
    const error = await useLogout();

    if (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      setUser(null);
      router.push("/");
    }
  };

  return (
    <header>
      <nav className="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
        <div className="xl:container m-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
            <div className="w-full flex justify-between lg:w-auto">
              <Link
                href="#"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200"></div>
                  <div className="h-6 w-2 bg-primary dark:bg-primaryLight"></div>
                </div>
                <span className="text-base font-bold text-gray-600 dark:text-white">
                  SASS
                </span>
              </Link>
              <label
                htmlFor="hbr"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                  <li>
                    <Link
                      href="/posts"
                      className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                    >
                      <span>Posts</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                    >
                      <span>Products</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                {user ? (
                  <button
                    onClick={() => logout()}
                    className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
                      Logout
                    </span>
                  </button>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-primary dark:text-gray-900">
                        Login
                      </span>
                    </Link>
                    <Link
                      href="/register"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-primary dark:text-gray-900">
                        Register
                      </span>
                    </Link>
                  </>
                )}
              </div>
              <button
                type="button"
                onClick={() => toggleDarkMode()}
                className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
              >
                {dark ? "💡 Light" : "🌙 Dark"}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSettingsStore, useLogoutStore } from "@/stores";

export default function App({ Component, pageProps }) {
  const dark = useSettingsStore((state) => state.dark);
  const logoutError = useLogoutStore((state) => state.error);
  console.log("test1", logoutError);

  return (
    <div className={dark ? "dark" : ""}>
      <Header />
      <div>{logoutError && <p>{logoutError}</p>}</div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

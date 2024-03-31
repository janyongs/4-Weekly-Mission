import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@components/header/Header";
import { Footer } from "../components/footer/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

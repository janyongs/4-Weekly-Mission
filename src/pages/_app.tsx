import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { NextPage } from "next";
import { ReactNode } from "react";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode;
};
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <div>{getLayout(<Component {...pageProps} />)}</div>;
}

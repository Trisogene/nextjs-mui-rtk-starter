import Page from "@/components/Page/Page";
import "@/conf/style.css";
import { store } from "@/lib/rtk/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Page Component={Component} {...pageProps} />
    </Provider>
  );
}

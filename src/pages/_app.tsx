import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    //define store
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

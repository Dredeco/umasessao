import { useEffect } from "react";

import '@/styles/globals.sass'
import '@/styles/Home.sass'
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Component {...pageProps} />
  )
}

import "../styles/About.css";
import "../styles/App.css";
import "../styles/Copyright.css";
import "../styles/Navbar.css";
import "../styles/Project.css";
import "../styles/Studio.css";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

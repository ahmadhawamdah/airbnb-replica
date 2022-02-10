import '../styles/globals.css';
import ProgressBar from "@badrap/bar-of-progress"
import Router from "next/router";


const prog = new ProgressBar ({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
})

Router.events.on("routeChangeStart", prog.start);
Router.events.on("routeChangeComplete", prog.finish);
Router.events.on("routeChangeError", prog.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

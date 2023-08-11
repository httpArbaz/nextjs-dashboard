import SideBar from "../components/SideBar.jsx";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SideBar>
      <Component {...pageProps} />
    </SideBar>
  );
}

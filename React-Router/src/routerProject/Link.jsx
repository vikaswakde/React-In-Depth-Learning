import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter.jsx";

function Link({ children, to }) {
  const { setCurrURL } = useContext(BrowserContext);

  function handleNavigation() {
    window.histroy.pushState({}, "", to);
    setCurrURL(new URL(window.location.origin + to));
  }

  return <a onClick={handleNavigation}>{children}</a>;
}

export default Link;

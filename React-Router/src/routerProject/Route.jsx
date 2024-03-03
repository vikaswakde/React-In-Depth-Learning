import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter.jsx";

function Route({ children, path }) {
  const { currURL } = useContext(BrowserContext);

  // am i the current URL?
  // yes --> render myself
  // no --> eat five star do nothing

  if (currURL.pathname === path) {
    return <>{children}</>;
  } else {
    return null;
  }
}

export default Route;

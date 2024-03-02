import React from "react";
import useRenderLogger from "./useRenderLogger.jsx";
const Home = () => {
  useRenderLogger();
  return (
    <div>
      <useRenderLogger />
    </div>
  );
};

export default Home;

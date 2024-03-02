import React, { useEffect } from "react";

const useRenderLogger = () => {
  useEffect(() => {
    console.log("Component has Mounted");
  }, []);

  useEffect(() => {
    console.log("Compoent has rerendered");
  });
};

export default useRenderLogger;

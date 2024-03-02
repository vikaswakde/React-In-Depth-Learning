import { useState, useEffect, useRef } from "react";

function useQuery(initialURL) {
  const [data, setData] = useState(null);
  const dataCache = useRef(new Map());

  useEffect(() => {
    fetch(initialURL)
      .then((response) => response.json())
      .then((json) => {
        dataCache.current.set(initialURL, json);
        setData(json);
      });
  }, []);

  function fetcher(urlToFetch) {
    const cache = dataCache.current;

    if (cache.has(urlToFetch)) {
      // CACHE HIT
      setData(cache.get(urlToFetch));
      console.log("CACHE HIT: ", urlToFetch);
      return;
    }

    // CACHE MISS
    fetch(urlToFetch)
      .then((response) => response.json())
      .then((json) => {
        // cache response
        cache.set(urlToFetch, json);
        setData(json);
        console.log("CACHE miss", urlToFetch);
      });
  }

  return { data, fetcher };
}

export default useQuery;

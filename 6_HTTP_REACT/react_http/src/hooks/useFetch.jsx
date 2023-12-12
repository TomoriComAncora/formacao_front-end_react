import { useState, useEffect } from "react";

// 4 custom hooks
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //   5 refatorando post
  const [config, setConfig] = useState(null); //para configuração
  const [method, setMethod] = useState(null); //para escolher o método
  const [callFetch, setCallFetch] = useState(null); //para ativar a requisição

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setData(json);
    };

    fetchData();
  }, [url, callFetch]);

  //   5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        json = await res.json();
      }
      setCallFetch(json);
    };
    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig };
};

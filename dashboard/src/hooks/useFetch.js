import { useState, useEffect } from "react";

const base_url =
  import.meta.env.VITE_API_BASE_URL || "https://gruposie7e-production.up.railway.app/";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${base_url}${endpoint}`);
      if (!res.ok) throw new Error(`Error en la respuesta del servidor`);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [endpoint]);
  return { data, isLoading };
};

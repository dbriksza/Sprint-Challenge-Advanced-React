import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, initialValue) => {
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    const axiosData = async function() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        throw error;
      }
    };
    axiosData();
  }, [url]);
  return { data };
};

export default useAxios;

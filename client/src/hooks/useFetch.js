// if we call api then we need to create arrow function again and again for every function to manage this thing we create and hooks foleder 26
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  ////comonent with endpoint 26
  const [data, setData] = useState();

  useEffect(() => {
    makeApiCall();
  }, [endpoint]);

  const makeApiCall = async () => {
    const res = await fetchDataFromApi(endpoint);
    setData(res);
  };

  return { data };
};
export default useFetch;

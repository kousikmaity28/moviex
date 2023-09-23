import React,{useState,useEffect} from 'react'
import { FetchApidata } from '../utils/api'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading("Loding...");
    setError(null)
    setData(null)
    const fetchData = async () => {
      try {
        const response = await FetchApidata(url);
        setData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading("Somthing wents Wrong");
      }
    };
    fetchData();
  }, [url]);
  return {data,loading,error}
}

export default useFetch
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Use null instead of false for the error state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url); // Await the axios.get call
        setData(res.data);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]); // Include 'url' as a dependency

  // Add a reFetch function
  const reFetch = async () => {
    setLoading(true);

    try {
      const res = await axios.get(url);
      setData(res.data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  return { data, loading, error, reFetch }; // Corrected 'refetch' to 'reFetch'
};

export default useFetch;

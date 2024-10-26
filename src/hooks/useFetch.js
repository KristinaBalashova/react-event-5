import { useState, useEffect } from 'react';
import { useStore } from '../store/userStore';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const storedToken = useStore((state) => state.token);
  const authToken = storedToken;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `${API_BASE_URL}${path}`;
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: authToken ? `Bearer ${authToken}` : undefined,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    if (authToken) {
      fetchData();
    } else {
      setLoading(false);
      setError(new Error('No token available'));
    }
  }, [path, authToken]);

  return { data, loading, error };
};

export default useFetch;

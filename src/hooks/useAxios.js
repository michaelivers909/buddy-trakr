import { useState, useEffect, useRef } from "react";
import axios from "axios";

/**
 *
 * @param {String} errorKey Key where any potential errors might be returned from the server
 * @returns
 */
export const useAxios = (method, url, errorKey = null) => {
  const isMountedRef = useRef(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  async function apiCall(config) {
    try {
      setError(null);
      setLoading(true);
      const res = await axios({ url, method, ...config });
      console.log(res);
      if (!isMountedRef.current) {
        return;
      }
      setLoading(false);
      if (errorKey && res.data[errorKey]) {
        return setError(res.data[errorKey]);
      }
      setData(res.data);
    } catch (err) {
      if (!isMountedRef.current) {
        return;
      }
      setLoading(false);
      setError("Something went wrong, please try again later.");
    }
  }

  return { error, loading, data, apiCall };
};

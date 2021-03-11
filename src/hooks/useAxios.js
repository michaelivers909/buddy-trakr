import { useState, useEffect, useRef } from "react";
import axios from "axios";

/**
 *
 * @param {String} errorKey Key where any potential errors might be returned from the server
 * @returns
 */
export const useAxios = (errorKey = null) => {
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
  /**
   *
   * @param {String} url Url of the request
   * @param {String} type Type of HTTP Request to make
   * @param {object} [config] Configuration for the request as per the Axios Docs
   */

  async function apiCall(url, type, config) {
    try {
      setLoading(true);
      const res = axios({ url, type, ...config });

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

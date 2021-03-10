import { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";

export const useAxios = (url) => {
  const isMountedRef = useRef(false);

  // Inside the hooks effect, change the isMountedRef's current key to true. Remember, useEffect only runs when the component is rendered
  useEffect(() => {
    isMountedRef.current = true;
    if (isMountedRef.current) setSomeStateKey("NEW VALUE");
    return () => {
      isMountedRef.current = false;
    };
  });
};

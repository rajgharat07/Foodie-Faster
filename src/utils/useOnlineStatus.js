import { useState,useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // try to check if online
  useEffect(() => {
    window.addEventListener("Offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("Online", () => {
      setOnlineStatus(true);
    });

  }, []);

  //boolean value
  return onlineStatus;
};

export default useOnlineStatus;

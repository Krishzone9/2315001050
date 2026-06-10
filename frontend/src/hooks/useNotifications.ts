
import { useEffect, useState } from "react";
import { getNotifications } from "@/services/notificationService";

export function useNotifications(token: string) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotifications(token, 1, 10).then((data) =>
      setNotifications(data.notifications || [])
    );
  }, [token]);

  return { notifications };
}


import { useState } from "react";

export function useViewedNotifications() {
  const [viewed, setViewed] = useState<string[]>([]);

  const markViewed = (id: string) => {
    const updated = [...viewed, id];
    setViewed(updated);
    localStorage.setItem("viewed", JSON.stringify(updated));
  };

  return { viewed, markViewed };
}

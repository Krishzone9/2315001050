
export interface Notification {
  id: string;
  type: "Event" | "Result" | "Placement";
  message: string;
  timestamp: string;
}

"use client";

import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
// import { getNotifications } from "../../services/notificationService";
 import { getNotifications } from "@/services/notificationService";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const data = await getNotifications();

      setNotifications(data.notifications || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Notifications
      </Typography>

      {notifications.map((item) => (
        <Card key={item.ID} sx={{ mb: 2 }}>
          <CardContent>
            <Typography fontWeight={700}>
              {item.Type}
            </Typography>

            <Typography>
              {item.Message}
            </Typography>

            <Typography variant="caption">
              {item.Timestamp}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
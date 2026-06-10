"use client";

import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const weights: any = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export default function PriorityPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("notifications");

    if (!raw) return;

    const data = JSON.parse(raw);

    const sorted = [...data]
      .sort((a, b) => {
        const weightDiff =
          weights[b.Type] - weights[a.Type];

        if (weightDiff !== 0) {
          return weightDiff;
        }

        return (
          new Date(b.Timestamp).getTime() -
          new Date(a.Timestamp).getTime()
        );
      })
      .slice(0, 10);

    setItems(sorted);
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Priority Inbox
      </Typography>

      {items.map((item, index) => (
        <Card key={index} sx={{ mb: 2 }}>
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
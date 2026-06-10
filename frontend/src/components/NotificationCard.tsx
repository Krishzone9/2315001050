
import { Card, CardContent, Typography } from "@mui/material";

export default function NotificationCard({
  title,
  type,
  timestamp,
  viewed,
}: any) {
  return (
    <Card sx={{ mb: 2, opacity: viewed ? 0.6 : 1 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>{type}</Typography>
        <Typography>{timestamp}</Typography>
      </CardContent>
    </Card>
  );
}

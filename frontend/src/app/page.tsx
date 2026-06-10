"use client";

import Link from "next/link";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Campus Notifications Dashboard
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        View all notifications and priority notifications.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                All Notifications
              </Typography>

              <Typography color="text.secondary" mb={2}>
                Browse notifications with pagination and filters.
              </Typography>

              <Button
                component={Link}
                href="/notifications"
                variant="contained"
              >
                Open
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Priority Inbox
              </Typography>

              <Typography color="text.secondary" mb={2}>
                Top notifications sorted by importance.
              </Typography>

              <Button
                component={Link}
                href="/priority"
                variant="contained"
              >
                Open
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
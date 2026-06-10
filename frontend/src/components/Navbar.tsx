
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Notification Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

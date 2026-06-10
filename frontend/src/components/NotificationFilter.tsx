
import { MenuItem, Select } from "@mui/material";

export default function NotificationFilter({ value, onChange }: any) {
  return (
    <Select value={value} onChange={onChange}>
      <MenuItem value="">All</MenuItem>
      <MenuItem value="Event">Event</MenuItem>
      <MenuItem value="Result">Result</MenuItem>
      <MenuItem value="Placement">Placement</MenuItem>
    </Select>
  );
}

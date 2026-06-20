import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0a0a0a",
      paper: "#111111",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;

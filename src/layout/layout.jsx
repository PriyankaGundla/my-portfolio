import { Box } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <Box minHeight="100vh">
      <Navbar />

      <Box component="main">{children}</Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;

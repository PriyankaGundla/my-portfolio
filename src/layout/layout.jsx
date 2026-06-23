import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <Box
        component="main"
        // sx={{
        //   pt: "10px",
        // }}
      >
        {children}
      </Box>

      <Footer />
    </>
  );
};

export default MainLayout;

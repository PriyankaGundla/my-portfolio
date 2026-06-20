import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "#000",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "72px",
          px: {
            xs: 2,
            sm: 3,
            md: 6,
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left Section - Logo */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "cursive",
              fontWeight: 700,
              color: "#fff",
              cursor: "pointer",
              fontSize: {
                xs: "1.1rem",
                sm: "1.3rem",
                md: "1.5rem",
              },
            }}
          >
            Priyanka Gundla
          </Typography>
        </Box>

        {/* Center Section - Desktop Only */}
        <Box
          sx={{
            flex: 1,
            display: {
              xs: "none",
              md: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: {
              md: 2,
              lg: 3,
              xl: 4,
            },
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item}
              onClick={() => handleScroll(item)}
              sx={{
                cursor: "pointer",
                color: "#a0a0a0",
                fontSize: {
                  md: "14px",
                  lg: "15px",
                  xl: "16px",
                },
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Desktop Only */}
          <Button
            variant="outlined"
            sx={{
              display: {
                xs: "none",
                md: "inline-flex",
              },
              whiteSpace: "nowrap",
              minWidth: "fit-content",
              color: "#fff",
              borderColor: "rgba(255,255,255,0.2)",
              textTransform: "none",
              px: 2,
              "&:hover": {
                borderColor: "#fff",
              },
            }}
          >
            View Work
          </Button>

          {/* All Screens */}
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.2)",
              textTransform: "none",
              px: {
                xs: 2,
                md: 3,
              },
              "&:hover": {
                borderColor: "#fff",
              },
            }}
          >
            <FileDownloadIcon sx={{ color: "#fff", mr: 1 }} />
            Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

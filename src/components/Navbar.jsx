import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

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
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: "12px",
              background: "linear-gradient(135deg, #00E5FF, #0091EA)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            PG
          </Box>
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
          {/* All Screens */}
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #00E5FF, #0091EA)",
              color: "#fff",
              textTransform: "none",
              px: 3,
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,229,255,0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #00C4E8, #0077C2)",
                boxShadow: "0 6px 25px rgba(0,229,255,0.4)",
              },
            }}
          >
            <FileDownloadIcon sx={{ mr: 1 }} />
            Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

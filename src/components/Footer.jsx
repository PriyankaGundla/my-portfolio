import React from "react";
import { Box, Container, Typography, IconButton, Stack } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        py: 3,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 2,
          }}
        >
          {/* Copyright */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: {
                xs: "14px",
                md: "16px",
              },
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            © 2026 Priyanka Gundla. Crafted with React & MUI.
          </Typography>

          {/* Right Side Icons */}
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              component="a"
              href="https://github.com/Priyanka-Gundla008"
              target="_blank"
              sx={{
                color: "#a0a0a0",
                "&:hover": { color: "#fff" },
              }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/priyanka-gundla-691b46351/"
              target="_blank"
              sx={{
                color: "#a0a0a0",
                "&:hover": { color: "#fff" },
              }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:gpriyanka1621@gmail.com"
              sx={{
                color: "#a0a0a0",
                "&:hover": { color: "#fff" },
              }}
            >
              <EmailIcon />
            </IconButton>

            <IconButton
              onClick={handleScrollToTop}
              sx={{
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.15)",
                ml: 1,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

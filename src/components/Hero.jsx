import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const stats = [
  {
    value: "2+",
    label: "Years Experience",
  },
  {
    value: "Neo4j",
    label: "Certified Professional",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "React.js",
    label: "Specialist",
  },
];

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",

        pt: {
          xs: 8,
          sm: 10,
          md: 12,
        },

        background: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(253, 241, 241, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    >
      {/* Glow Effect */}
      <Box
        sx={{
          position: "absolute",
          // top: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.15), transparent)",
          filter: "blur(60px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          right: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,77,255,0.15), transparent)",
          filter: "blur(60px)",
        }}
      />

      <Box
        sx={{
          width: "100%",
          maxWidth: "1600px",
          mx: "auto",
          px: {
            xs: 3,
            sm: 4,
            md: 8,
            lg: 12,
          },
        }}
      >
        {/* Badge */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            px: 2,
            py: 1,
            borderRadius: "30px",
            border: "1px solid rgba(255,255,255,0.1)",
            bgcolor: "rgba(255,255,255,0.03)",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              color: "#00E5FF",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            🚀 Available for Opportunities
          </Typography>
        </Box>

        {/* Heading */}
        <Typography
          sx={{
            fontWeight: 800,
            lineHeight: 1.1,
            mb: 2,
            fontSize: {
              xs: "3rem",
              sm: "4rem",
              md: "6rem",
            },
          }}
        >
          Hi, I'm{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg,#00E5FF,#7C4DFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Priyanka Gundla
          </Box>
        </Typography>

        {/* Role */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              color: "#A0A0A0",
              fontSize: {
                xs: "1.2rem",
                md: "1.8rem",
              },
              fontWeight: 500,
            }}
          >
            Full Stack Developer
          </Typography>

          <Typography
            sx={{
              color: "#00E5FF",
              fontSize: {
                xs: "1rem",
                md: "1.4rem",
              },
              mt: 0.5,
              fontWeight: 500,
            }}
          >
            React.js Developer • Node.js • NestJS • PostgreSQL
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          sx={{
            color: "#808080",
            maxWidth: "800px",
            lineHeight: 1.8,
            mb: 5,
            fontSize: {
              xs: "1rem",
              md: "1.15rem",
            },
          }}
        >
          Building scalable and high-performance web applications. Creating
          responsive and intuitive user experiences. Transforming ideas into
          reliable digital solutions. Working across both frontend and backend
          development. Leveraging modern technologies and best practices.
          Focused on clean architecture and code quality. Continuously learning,
          growing, and innovating.
        </Typography>

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          flexWrap="wrap"
          mb={6}
        >
          {/* Download Resume */}
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{
              background: "linear-gradient(135deg,#00E5FF,#0091EA)",
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              boxShadow: "0 0 20px rgba(0,229,255,0.3)",
              "&:hover": {
                background: "linear-gradient(135deg,#00D4FF,#0077CC)",
              },
            }}
          >
            Download Resume
          </Button>

          {/* GitHub */}
          <IconButton
            sx={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#A0A0A0",
              width: 50,
              height: 50,
              "&:hover": {
                color: "#fff",
                borderColor: "#00E5FF",
                transform: "translateY(-2px)",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>

          {/* LinkedIn */}
          <IconButton
            sx={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#A0A0A0",
              width: 50,
              height: 50,
              "&:hover": {
                color: "#fff",
                borderColor: "#00E5FF",
                transform: "translateY(-2px)",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>

          {/* Email */}
          <IconButton
            sx={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#A0A0A0",
              width: 50,
              height: 50,
              "&:hover": {
                color: "#fff",
                borderColor: "#00E5FF",
                transform: "translateY(-2px)",
              },
            }}
          >
            <EmailIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;

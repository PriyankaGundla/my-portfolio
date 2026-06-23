import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import Section from "./common/Section";

const About = () => {
  return (
    <Section id="about">
      <Grid container spacing={8}>
        {/* Left Content */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 3,
              mt: "10%",
            }}
          >
            <Box
              sx={{
                width: "40px",
                height: "2px",
                bgcolor: "#00E5FF",
              }}
            />

            <Typography
              sx={{
                color: "#00E5FF",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              About
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                md: "2.5rem",
              },
              fontWeight: 500,
              lineHeight: 1.1,
              mb: 4,
            }}
          >
            Building scalable full-stack web applications.
          </Typography>

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
            I'm a Full Stack Developer with 2+ years of experience developing
            modern web applications and scalable software solutions. My journey
            has been driven by curiosity, continuous learning, and a passion for
            solving real-world problems through technology.
          </Typography>

          <Typography
            sx={{
              color: "#A0A0A0",
              fontSize: "1.1rem",
              lineHeight: 2,
              mb: 4,
            }}
          >
            I specialize in React.js, Node.js, NestJS, PostgreSQL, Material UI,
            Redux, and modern JavaScript development. From building intuitive
            user interfaces to designing efficient backend APIs, I enjoy working
            across the entire development lifecycle.
          </Typography>

          <Typography
            sx={{
              color: "#A0A0A0",
              fontSize: "1.1rem",
              lineHeight: 2,
            }}
          >
            Beyond coding, I actively explore emerging technologies, improve my
            problem-solving skills, and focus on building software that is
            clean, maintainable, and impactful.
          </Typography>
        </Grid>

        {/* Right Side */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            elevation={0}
            sx={{
              // maxWidth: "450px",
              // ml: "auto",
              // width: "100%",
              p: 4,
              mt: {
                xs: 0,
                md: 27,
              },
              borderRadius: "24px",
              bgcolor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                mb: 4,
              }}
            >
              Quick Facts
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <LocationOnOutlinedIcon
                    sx={{ color: "#00E5FF", fontSize: "20px" }}
                  />
                  <Typography
                    sx={{
                      color: "#808080",
                    }}
                  >
                    Location
                  </Typography>
                </Box>

                <Typography fontWeight={500}>Hyderabad, Telangana</Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <WorkOutlineOutlinedIcon
                    sx={{ color: "#00E5FF", fontSize: "20px" }}
                  />
                  <Typography
                    sx={{
                      color: "#808080",
                    }}
                  >
                    Experience
                  </Typography>
                </Box>

                <Typography fontWeight={500}>2+ Years</Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <EmailOutlinedIcon
                    sx={{ color: "#00E5FF", fontSize: "20px" }}
                  />
                  <Typography
                    sx={{
                      color: "#808080",
                    }}
                  >
                    Email
                  </Typography>
                </Box>

                <Typography fontWeight={500} sx={{ wordBreak: "break-word" }}>
                  gpriyanka1621@gmail.com
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <CodeOutlinedIcon
                    sx={{ color: "#00E5FF", fontSize: "20px" }}
                  />
                  <Typography
                    sx={{
                      color: "#808080",
                    }}
                  >
                    Specialization
                  </Typography>
                </Box>

                <Typography fontWeight={500}>Full Stack Developer</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Section>
  );
};

export default About;

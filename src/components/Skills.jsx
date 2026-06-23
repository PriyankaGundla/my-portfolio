import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCss3Alt,
  FaHtml5,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiRedux,
  SiMui,
  SiNestjs,
  SiExpress,
  SiSwagger,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPython,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Section from "./common/Section";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Context API", icon: <FaReact /> },
      { name: "Material UI", icon: <SiMui /> },
      { name: "API Integration", icon: "🔗" },
      { name: "Axios", icon: <ApiIcon /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "Swagger", icon: <SiSwagger /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "RESTful APIs", icon: "🔗" },
      { name: "Middleware", icon: "⚙️" },
      { name: "Error Handling", icon: "🚨" },
      { name: "API Design", icon: "📡" },
      { name: "Server-side Rendering", icon: "🌐" },
      { name: "JWT Authentication", icon: "🔐" },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Agile Methodologies", icon: "🚀" },
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      {/* Section Heading */}
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
          Skills
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
        Technologies I Work With
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
        A collection of technologies, frameworks, databases, and tools I use to
        build scalable, responsive, and high-performance web applications.
      </Typography>

      {/* Skills Categories */}
      <Grid container spacing={3}>
        {skillCategories.map((category) => (
          <Grid
            key={category.title}
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: "24px",
                bgcolor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s ease",

                "&:hover": {
                  borderColor: "#00E5FF",
                  transform: "translateY(-5px)",
                  boxShadow: "0 0 20px rgba(0,229,255,0.15)",
                },
              }}
            >
              {/* Category Title */}
              <Typography
                sx={{
                  color: "#00E5FF",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                {category.title}
              </Typography>

              {/* Skills */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                {category.skills.map((skill) => (
                  <Box
                    key={skill.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      px: 2,
                      py: 1,
                      borderRadius: "12px",
                      bgcolor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#00E5FF",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "18px",
                      }}
                    >
                      {skill.icon}
                    </Box>

                    <Typography>{skill.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;

import Typography from "@mui/material/Typography";
import Section from "./common/Section";

const About = () => {
  return (
    <Section id="about">
      <Typography variant="h3">About Me</Typography>

      <Typography mt={2}>
        Frontend Developer with 2+ years of experience...
      </Typography>
    </Section>
  );
};

export default About;

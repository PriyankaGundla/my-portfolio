import { Container, Box } from "@mui/material";

const Section = ({ id, children }) => {
  return (
    <Box id={id} component="section" py={10}>
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};

export default Section;

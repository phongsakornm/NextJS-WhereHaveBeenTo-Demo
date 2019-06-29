import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {
    footer
  } from '../shared/FooterStyles';

export default function Footer() {
  return (
    <footer style={footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Where have been to
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          © 2019 Where have been to
        </Typography>
      </Container>
    </footer>
  );
}

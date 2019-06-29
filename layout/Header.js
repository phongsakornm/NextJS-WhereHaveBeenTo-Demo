import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {
  toolbar,
  toolbarTitle,
  logoHeader,
  toolbarSecondary,
  toolbarLink
} from "../shared/HeaderStyles";

const sections= [
  {
    name: "Health",
    pathURL: "/health"
  },
  {
    name: "Travel",
    pathURL: "/travel"
  },
  {
    name: "Movie",
    pathURL: "/movie"
  },
  {
    name: "Contact",
    pathURL: "/contact"
  }
];

export default function Header() {
  return (
    <Container maxWidth="lg">
      <Toolbar style={toolbar}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          style={toolbarTitle}
        >
          <Link href="/">
            <img
              style={logoHeader}
              src="/static/logo/LogoMakr_5vUVOR.png"
              alt="my image"
            />
          </Link>
        </Typography>
        <Button variant="outlined" size="small">
          Sign in
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" style={toolbarSecondary}>
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.name}
            variant="body2"
            href={`${section.pathURL}`}
            style={toolbarLink}
          >
            {section.name}
          </Link>
        ))}
      </Toolbar>
    </Container>
  );
}

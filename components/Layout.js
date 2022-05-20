import React from "react";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next E-com</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Next E-com</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>@All right reserved. Next E-com 2022.</Typography>
      </footer>
    </div>
  );
}

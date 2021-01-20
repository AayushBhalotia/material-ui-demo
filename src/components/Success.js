import React from "react";
import {
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

function Success() {
  return (
    <ThemeProvider>
      <React.Fragment>
        <Container maxWidth="xs">
          <Grid container justify="center" alignItems="center">
            <Typography variant="h2" color="primary">
              Thank you
            </Typography>
          </Grid>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Success;

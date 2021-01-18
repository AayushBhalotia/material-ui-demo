import React from "react";
import {
  Container,
  Grid,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";

function Success() {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <Container maxWidth="xs">
          <Grid container justify="center" alignItems="center">
            <Typography variant="h2" color="primary">
              Thank you
            </Typography>
          </Grid>
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default Success;

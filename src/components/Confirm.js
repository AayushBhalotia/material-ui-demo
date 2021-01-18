import React from "react";
import {
  Container,
  MuiThemeProvider,
  Button,
  Grid,
  List,
  ListItemText,
  Typography,
} from "@material-ui/core";

function Confirm({ nextStep, prevStep, User }) {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <Container maxWidth="xs">
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={8}
          >
            <Grid item xs={12}>
              <Typography variant="h4">Confirm the Details</Typography>
            </Grid>
            <List style={styles.list}>
              <ListItemText primary="First Name" secondary={User.firstName} />
              <ListItemText primary="Last Name" secondary={User.lastName} />
              <ListItemText primary="Email" secondary={User.email} />
              <ListItemText primary="Password" secondary={User.password} />
              <ListItemText primary="Gender" secondary={User.gender} />
              <ListItemText primary="Course" secondary={User.course} />
            </List>

            <Grid item>
              <Button
                style={styles.button}
                variant="contained"
                color="primary"
                onClick={nextStep}
              >
                Confirm
              </Button>

              <Button
                style={styles.button}
                variant="contained"
                color="secondary"
                onClick={prevStep}
              >
                Go back
              </Button>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
}

const styles = {
  button: {
    margin: 10,
  },
};

export default Confirm;

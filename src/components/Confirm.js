import React, { useContext } from "react";
import { UserContext } from "../App";
import {
  Container,
  ThemeProvider,
  Button,
  Grid,
  List,
  ListItemText,
  Typography,
} from "@material-ui/core";

function Confirm({ nextStep, prevStep }) {
  const userContext = useContext(UserContext);
  return (
    <ThemeProvider>
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
              <ListItemText
                primary="First Name"
                secondary={userContext.User.firstName}
              />
              <ListItemText
                primary="Last Name"
                secondary={userContext.User.lastName}
              />
              <ListItemText
                primary="Email"
                secondary={userContext.User.email}
              />
              <ListItemText
                primary="Password"
                secondary={userContext.User.password}
              />
              <ListItemText
                primary="Gender"
                secondary={userContext.User.gender}
              />
              <ListItemText
                primary="Course"
                secondary={userContext.User.course}
              />
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
    </ThemeProvider>
  );
}

const styles = {
  button: {
    margin: 10,
  },
};

export default Confirm;

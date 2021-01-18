import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Radio,
  InputLabel,
  RadioGroup,
  Select,
  MenuItem,
  MuiThemeProvider,
  styled,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120,
  },
  heading: {
    textAlign: "center",
    margin: 32,
  },
  label: {
    fontSize: "inherit",
  },
}));

const SignupButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

export default function UserDetails({ nextStep, handleChange, User }) {
  const classes = useStyles();
  const formSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xs">
          <Typography
            color="primary"
            className={classes.heading}
            component="h1"
            variant="h4"
          >
            Sign up
          </Typography>

          <form onSubmit={formSubmit}>
            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="fname"
                  onChange={handleChange("firstName")}
                  defaultValue={User.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={handleChange("lastName")}
                  defaultValue={User.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange("email")}
                  defaultValue={User.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange("password")}
                  defaultValue={User.password}
                />
              </Grid>

              <Grid item xs={12} sm={7}>
                <InputLabel> Gender</InputLabel>
                <RadioGroup
                  row
                  label="Gender"
                  name="gender"
                  defaultValue={User.gender}
                  onChange={handleChange("gender")}
                >
                  <FormControlLabel
                    value="Female"
                    control={<Radio required />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} sm={5}>
                <InputLabel>Courses</InputLabel>
                <Select
                  className={classes.formControl}
                  onChange={handleChange("course")}
                  defaultValue={User.course}
                  required
                >
                  <MenuItem value={"JEE"}>JEE</MenuItem>
                  <MenuItem value={"NEET"}>NEET</MenuItem>
                  <MenuItem value={"CAT"}>CAT</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={<Checkbox color="secondary" required />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              <Grid item xs={12}>
                <SignupButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Sign up
                </SignupButton>
              </Grid>
            </Grid>
          </form>
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
}

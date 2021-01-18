import {
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

function Counter() {
  const [countleft, setCountleft] = useState(0);
  const [countright, setCountright] = useState(0);
  const [flag, setFlag] = useState("true");

  function tick() {
    setFlag((isflag) => !isflag);
    if (countright < 100)
      flag ? setCountleft(countright + 1) : setCountright(countleft + 1);
  }

  useEffect(() => {
    const timer = setTimeout(tick, 1000);
    return () => clearTimeout(timer); // eslint-disable-next-line
  }, [countright, countleft]);


  return (
    <ThemeProvider>
      <Container maxWidth="md">
        <Grid container alignItems="center" justify="space-around">
          <Grid item xs={2}>
            <Typography variant="h5" color="primary">
              Count:{countleft}
            </Typography>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={2}>
            <Typography variant="h5" color="secondary">
              Count:{countright}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Counter;

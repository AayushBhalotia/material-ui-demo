import { createMuiTheme } from "@material-ui/core/styles";
import { purple, green } from "@material-ui/core/colors";


const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  overrides: {
    // Style sheet name ⚛️
    MuiSelect: {
      // Name of the rule
      select: {
        "&:focus": {
          backgroundColor:"none"
        }
      },
    },
  },
});

export default theme;

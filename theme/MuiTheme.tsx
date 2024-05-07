
import {
  ThemeProvider,
} from "@mui/material/styles";

import theme from "./theme";


// =======================================================
const MuiTheme = ({ children }: any) => {

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default MuiTheme;

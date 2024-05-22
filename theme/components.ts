import { dark, grey } from "./themeColors";
import { fontFamily, fontSize } from "./typography"; // ========================================================

// =========================================================
export const components : any = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        minWidth: 0,
        minHeight: 0,
        fontWeight: 500,
        boxShadow: "unset",
        textTransform: "unset",
      }),
      sizeLarge: {
        padding: ".6rem 2.5rem",
      },
    },
    defaultProps: {
      color: "inherit",
    },
  },
};

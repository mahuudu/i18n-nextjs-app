import { Box } from "@mui/material";

const FlexRowCenter = ({ children, ...props }: any) => (
  <Box display="flex" justifyContent="center" alignItems="center" {...props}>
    {children}
  </Box>
);

export default FlexRowCenter;

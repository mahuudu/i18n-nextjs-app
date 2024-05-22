import { Box } from "@mui/material";

const FlexBox = ({ children, ...props }: any) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

export default FlexBox;

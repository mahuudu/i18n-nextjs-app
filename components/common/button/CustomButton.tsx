import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button'; // Import Button from Material-UI

interface CustomButtonProps extends ButtonProps {
  // Add any additional props you need
  customProp?: string;
  color: any;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  // Use the original Button component from Material-UI and pass along the props
  return <Button {...props}>{props.children}</Button>;
};

export enum EleMuiVariants {
  OrangeOutline = "orange-outline",
  PurpleOutline = "purple-outline",
  OrangePrimary = "orange-primary",
}

export interface EleMuiVariantOverrides {
  [EleMuiVariants.OrangeOutline]: true;
  [EleMuiVariants.PurpleOutline]: true;
  [EleMuiVariants.OrangePrimary]: true;
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides extends EleMuiVariantOverrides { }
}

export default CustomButton;

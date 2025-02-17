import { React, useEffect, useState } from "react";
import { Button } from "@mui/material";

const ButtonInput = ({
  value,
  variant = "contained",
  disabled = false,
  disableElevation = false,
  handleOnClick ,
  color="success",
  size = "medium",
  endIcon = [],
  startIcon = [],
  sx = {},
}) => {

  return (
    <Button
      variant={variant}
      sx={sx}
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      size={size}
      endIcon={endIcon[0]}
      startIcon={startIcon[0]}
      onClick={handleOnClick}
    >
      {value}
    </Button>
  );
};

export default ButtonInput;

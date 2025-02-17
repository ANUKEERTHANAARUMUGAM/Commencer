import React, { useState } from "react";

import { IconButton, InputAdornment, TextField } from "@mui/material";
const TextInput = ({
  id,
  name,
  label = null,
  placeholder = "",
  value,
  type = "text",
  onChange,
  required = false,
  disabled = false,
  multiline = false,
  variant = "standard",
  error = false,
  rows = 3,
  maxRows = 5,
  minRows = 1,
  startIcon = null,
  endIcon = [],
  sx = {},
  size = "small",
  onBlur,
  helperText = "",
  ref
}) => {
  const [isPassword, setIsPassword] = useState(true);
  const handlePasswordToggle = (e) => {
    e.preventDefault;
    setIsPassword(!isPassword);
  };
  return (
    <TextField
    inputRef={ref}
      id={id}
      name={name}
      label={label}
      sx={sx}
      size={size}
      fullWidth
      placeholder={!label && required ? placeholder + "*" : placeholder}
      type={isPassword ? type : "text"}
      onChange={onChange}
      onBlur={onBlur} //calls the delegate function only if the function is passed
      required={required}
      variant={variant}
      error={error}
      helperText={helperText}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              {startIcon && startIcon}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={(e) => {
                  handlePasswordToggle(e);
                }}
              >
                {endIcon && type == "password"
                  ? isPassword
                    ? endIcon[0]
                    : endIcon[1]
                  : endIcon[0]}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      disabled={disabled}
      multiline={multiline}
      rows={multiline && rows}
      minRows={multiline && minRows}
      maxRows={multiline && maxRows}
      value={value}
    />
  );
};

export default TextInput;

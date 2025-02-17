import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid2 as Grid, Divider, Typography, Link } from "@mui/material";
import TextInput from "../../Components/Inputs/TextInput";
import ButtonInput from "../../Components/Inputs/ButtonInput";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as routes from "../../Shared/routes";
import { customStyles } from "../../Shared/styles";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const handleFormSubmition = (data) => {
    console.log(data);
    axios
      .post(routes.LOGIN_API, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data, "marg");
        if (response.data.isAuthenticated) {
          sessionStorage.setItem(
            "user",
            JSON.stringify({
              userName: response.data.userName,
              token: response.data.token,
            })
          );
          navigate("/home");
        } else {
          alert(response.data.message);
          reset({ email: "", password: "" });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <Grid
      container
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      {/* Left Empty Space */}
      <Grid size={{ lg: 4 }}></Grid>
      <Grid size={{ xs: 12, lg: 4 }} sx={customStyles.gridStyle}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12 }}>
            <h1 style={{ textAlign: "center" }}>LOGIN</h1>
            <Divider variant="middle" />
          </Grid>
          {/* Email Text Input */}
          <Grid size={{ xs: 12 }}>
            <TextInput
              {...register("email", {
                required: "please enter valid email",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "enter a valid email id",
                },
              })}
              id="email"
              name="email"
              type="text"
              size="small"
              placeholder="Enter email"
              required
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          {/* Password Input  */}
          <Grid size={{ xs: 12 }}>
            <TextInput
              {...register("password", {
                required: "please enter password",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must be at least 8 characters, include a letter, a number, and a special character",
                },
              })}
              id="password"
              name="password"
              type="password"
              size="small"
              placeholder="Enter Password"
              required
              error={!!errors.password}
              helperText={errors.password?.message}
              endIcon={[<VisibilityIcon />, <VisibilityOffIcon />]}
            />
          </Grid>
          {/* Submit Button */}
          <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
            <ButtonInput
              value={"Login"}
              handleOnClick={handleSubmit((data) => {
                handleFormSubmition(data);
              })}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            {/* Sign up link section */}
            <Typography sx={{ textAlign: "center" }}>
              Haven't Signed Up?{" "}
              <Link underline="hover" onClick={() => navigate("/signup")}>
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Right Empty space */}
      <Grid size={{ lg: 4 }}></Grid>
    </Grid>
  );
};

export default Login;

// const customStyles = {
//   gridStyle: {
//     padding: "20px",
//     boxShadow: "2px -2px 15px -9px rgba(66, 68, 90, 1);",
//     borderRadius: "20px",
//   },
// };

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
import { customStyles } from "./../../Shared/styles";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    reset,
  } = useForm();
  const navigate = useNavigate();
  console.log(watch());
  const handleFormSubmition = (data) => {
    console.log(data);
    axios
      .post(routes.SIGNUP_API, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data, "marg");
        if (response.data.isAuthenticated) {
          navigate("/");
        } else {
          alert(response.data.message);
          reset({ email: "", password: "", confirmPassword: "" });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid size={{ lg: 4 }}></Grid>
      <Grid size={{ xs: 12, lg: 4 }} sx={{ ...customStyles.gridStyle }}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12 }}>
            <h1 style={{ textAlign: "center" }}>Sign Up</h1>
            <Divider variant="middle" />
          </Grid>

          {/*Name Text Box*/}
          <Grid size={{ xs: 12 }}>
            {" "}
            <TextInput
              {...register("userName", {
                required: "please enter name",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
              })}
              id="userName"
              name="userName"
              type="text"
              size="small"
              placeholder="Enter Name"
              required
              error={!!errors.userName}
              helperText={errors.userName?.message}
            />
          </Grid>

          {/*Email Text Box */}
          <Grid size={{ xs: 12 }}>
            {" "}
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

          {/* Password Text Box*/}
          <Grid size={{ xs: 12 }}>
            {" "}
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

          {/*Confirm Password Text Box */}
          <Grid size={{ xs: 12 }}>
            {" "}
            <TextInput
              {...register("confirmPassword", {
                validate: (value) => {
                  const password = getValues("password");

                  if (!errors.password && value === "")
                    return "Please enter password";
                  if (value !== password) return "Passwords do not match";
                },
              })}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              size="small"
              placeholder="Confirm Password"
              required
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              endIcon={[<VisibilityIcon />, <VisibilityOffIcon />]}
            />
          </Grid>

          {/*Submit Button */}
          <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
            <ButtonInput
              value={"Sign Up"}
              handleOnClick={handleSubmit((data) => {
                handleFormSubmition(data);
              })}
            />
          </Grid>

          {/* Login link section */}
          <Grid size={{ xs: 12 }}>
            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <Link underline="hover" onClick={() => navigate("/")}>
                Login
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ lg: 4 }}></Grid>
    </Grid>
  );
};

export default SignUp;

// const customStyles = {
//   gridStyle: {
//     padding: "20px",
//     boxShadow: "2px -2px 15px -9px rgba(66, 68, 90, 1);",
//     borderRadius: "20px",
//   },
// };

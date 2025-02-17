import React from "react";
import { Grid2 as Grid, Divider, Typography, Link } from "@mui/material";
const Home = () => {
  const user = JSON.parse(sessionStorage.getItem("user")) || {};
  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>Home {user.userName}</Grid>
      <Grid size={{ xs: 12 }}>
        <Grid container>
          <Grid size={{ md: 3 }}></Grid>
          <Grid size={{ md: 6 }} sx={{ textAlign: "center" }}>
            <Grid container>
              {/* <Grid size={{ xs: 4 }}>1</Grid>
              <Grid size={{ xs: 4 }}>2</Grid>
              <Grid size={{ xs: 4 }}>3</Grid>
              <Grid size={{ xs: 4 }}>4</Grid>
              <Grid size={{ xs: 4 }}>5</Grid>
              <Grid size={{ xs: 4 }}>6</Grid>
              <Grid size={{ xs: 4 }}>7</Grid>
              <Grid size={{ xs: 4 }}>8</Grid>
              <Grid size={{ xs: 4 }}>9</Grid>*/}
            </Grid> 
          </Grid>
          <Grid size={{ md: 3 }}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;

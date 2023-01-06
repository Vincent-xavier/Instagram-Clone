import { Grid } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} direction={"row"}>
        <Grid item md={6}>Hai</Grid>
        <Grid item md={6}>Welcome</Grid>
      </Grid>
    </>
  );
};

export default Login;

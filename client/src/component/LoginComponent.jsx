import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authAction";

const SignupComponent = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const onSubmit = async (data) => {
    const {email,password} = data
    
    console.log("ddddd",email,password)
    try{
      const res = await dispatch(loginUser(data))
      return res;
    }
    catch(error){
      console.log(error)
    }
    
    reset();
  };

  return (
    <Stack sx={{ width: "30%", justifyContent: "center" }}>
      <Card>
        <CardContent sx={{ mb: 6 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={"20px"}>
              <Stack width={"100%"} alignItems={"center"}>
                <h1>Log In</h1>
              </Stack>
             
              <Stack width={"100%"} alignItems={"center"}>
                <TextField
                  label="Email"
                  type="email"
                  {...register("email", {
                    required: "Email is requried",
                  })}
                  sx={{ width: "80%" }}
                />
                {errors.email && (
                  <p style={{ color: "red" }}>{`${errors.email.message}`}</p>
                )}
              </Stack>
              <Stack width={"100%"} alignItems={"center"}>
                <TextField
                  label="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is requried",
                    minLength: {
                      value: 10,
                      message: "Password must atleast 10 character",
                    },
                  })}
                  sx={{ width: "80%" }}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{`${errors.password.message}`}</p>
                )}
              </Stack>
              
             
              <Stack width={"100%"} alignItems={"center"}>
                <Button
                  type="submit"
                  sx={{ width: "80%" }}
                  disabled={isSubmitting}
                  variant="contained"
                >
                  Submit
                </Button>
              </Stack>
              <Link to={"/signup"}>
                <Typography sx={{ ml: 6 }}>Create New Account</Typography>
              </Link>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default SignupComponent;

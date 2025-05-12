"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Box } from "@mui/material";
import { useRouter } from "next/navigation";

const schema = yup.object({
  email: yup.string().required("Email is required").email(),
  password: yup.string().required("Password is required").min(6),
});

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            fontSize: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Login
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "",
            }}
          >
            <TextField
              {...register("email")}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ width: "300px" }}
            />
            {errors.email?.message && (
              <Box sx={{ color: "red" }}>{errors.email.message}</Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "",
            }}
          >
            <TextField
              {...register("password")}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              sx={{ width: "300px" }}
            />
            {errors.password?.message && (
              <Box sx={{ color: "red" }}>{errors.password.message}</Box>
            )}
          </Box>
          <Box>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
}

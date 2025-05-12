"use client";

import { login } from "../../lib/actions";
import { useFormState } from "react-dom";
import { Button, TextField, Box } from "@mui/material";

export default function LoginForm() {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);
  return (
    <form action={formAction}>
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

                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    sx={{ width: "300px" }}
                    name="email"
                  />
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
                 
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    sx={{ width: "300px" }}
                  />
               
                </Box>
                <Box>
                  <Button type="submit" variant="contained">
                    Login
                  </Button>
                </Box>
                {state?.error}
              </Box>
    </form>
  );
}
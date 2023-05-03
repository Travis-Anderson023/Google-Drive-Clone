import { ChangeEvent, useCallback, useState } from "react";

import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useToggle } from "react-use";

import { ReactComponent as SVGLogo } from "../../../../../src/assets/logo.svg";
import { useLoginUserMutation } from "../../../api/gql/generated/schema";
import { useApolloLinkConfig } from "../../../reactiveVar/apolloLinkConfigVar";

const SignIn = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    showPassword: false,
  });

  const [, setApolloLinkConfig] = useApolloLinkConfig();
  // Form should only display one field at a time
  const [stepIsUsername, toggleStep] = useToggle(true);
  const navigate = useNavigate();

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const propToUpdate = event.target.name;
      const newValue = event.target.value;
      setFormData((prevVal) => ({ ...prevVal, [propToUpdate]: newValue }));
    },
    [setFormData],
  );

  const [loginUser] = useLoginUserMutation({
    variables: {
      input: {
        name: formData.userName,
        password: formData.password,
      },
    },
    onCompleted: (data) => {
      if (data.loginUser) {
        localStorage.setItem("token", data.loginUser);
        setApolloLinkConfig({ token: data.loginUser });
        navigate("/");
      }
    },
    onError: () => {
      alert("Invalid username or password");
    },
  });

  const handleNext = useCallback(() => {
    if (stepIsUsername) {
      toggleStep();
    } else {
      void loginUser();
    }
  }, [stepIsUsername, toggleStep, loginUser]);

  const createAccount = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            p: 6,
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "10px",
          }}
        >
          <SVGLogo />
          <Typography variant="h4" sx={{ mb: 2, mt: 2 }}>
            Sign In
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            to continue to Google Drive
          </Typography>
          {stepIsUsername ? (
            <FormControl fullWidth>
              <InputLabel id="userName" shrink={Boolean(formData.userName)}>
                User Name
              </InputLabel>
              <TextField
                id="userName"
                variant="outlined"
                value={formData.userName}
                name="userName"
                onChange={handleOnChange}
              />
            </FormControl>
          ) : (
            <FormControl fullWidth>
              <InputLabel id="password" shrink={Boolean(formData.password)}>
                Password
              </InputLabel>
              <TextField
                id="password"
                variant="outlined"
                value={formData.password}
                name="password"
                onChange={handleOnChange}
              />
            </FormControl>
          )}
          <Box sx={{ width: "100%", textAlign: "start" }}>
            <Button variant="text" size="small" disabled>
              Forgot Username?
            </Button>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }} color="text.secondary">
            Not your computer? Use Guest mode to sign in privately.
          </Typography>
          <Box sx={{ width: "100%", textAlign: "start" }}>
            <Button variant="text" size="small" disabled>
              Learn More
            </Button>
          </Box>
          <Box sx={{ mt: 2, width: "100%", display: "flex", justifyContent: "space-between" }}>
            <Button variant="text" size="small" onClick={createAccount}>
              Create account
            </Button>
            <Button variant="contained" size="small" onClick={handleNext}>
              Next
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: 2, width: "100%", display: "flex", justifyContent: "space-between" }}>
          <FormControl size="small" sx={{ width: "225px" }}>
            <InputLabel id="English (UnitedStates)">English (UnitedStates)</InputLabel>
            <Select disabled variant="standard">
              <MenuItem value={10}>Google Docs</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <Button variant="text" size="small" disabled>
              Help
            </Button>
            <Button variant="text" size="small" disabled>
              Privacy
            </Button>
            <Button variant="text" size="small" disabled>
              Terms
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;

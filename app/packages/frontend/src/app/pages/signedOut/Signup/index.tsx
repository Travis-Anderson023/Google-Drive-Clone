import { ChangeEvent, useCallback, useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ReactComponent as SVGLogo } from "../../../../../src/assets/logo.svg";
import { useCreateUserMutation } from "../../../api/gql/generated/schema";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    name: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });
  const navigate = useNavigate();

  const [createUser] = useCreateUserMutation({
    variables: {
      input: {
        name: formData.name,
        password: formData.password,
      },
    },
  });

  const handleNext = useCallback(async () => {
    try {
      const result = await createUser();
      if (result.data?.createUser) {
        navigate("/signin");
      }
    } catch (err) {
      alert("Error creating user");
    }
  }, [createUser, navigate]);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const propToUpdate = event.target.name;
      const newValue = event.target.value;
      setFormData((prevVal) => ({ ...prevVal, [propToUpdate]: newValue }));
    },
    [setFormData],
  );

  const signInInstead = useCallback(() => {
    navigate("/signin");
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
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "center",
            p: 6,
            alignItems: "start",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <SVGLogo />
            <Typography variant="h4" sx={{ mb: 2, mt: 2 }}>
              Create your Google Account
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              to continue to Google Drive
            </Typography>
            <span style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "10px" }}>
              <FormControl fullWidth size="small">
                <InputLabel id="first-name" shrink={Boolean(formData.firstName)}>
                  First Name
                </InputLabel>
                <TextField
                  size="small"
                  id="first-name"
                  variant="outlined"
                  value={formData.firstName}
                  name="firstName"
                  onChange={handleOnChange}
                />
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel id="last-name" shrink={Boolean(formData.lastName)}>
                  Last Name
                </InputLabel>
                <TextField
                  size="small"
                  id="last-name"
                  variant="outlined"
                  value={formData.lastName}
                  name="lastName"
                  onChange={handleOnChange}
                />
              </FormControl>
            </span>
            <FormControl fullWidth sx={{ mt: 2 }} size="small">
              <InputLabel id="user-name" shrink={Boolean(formData.name)}>
                User Name
              </InputLabel>
              <TextField
                size="small"
                id="user-name"
                variant="outlined"
                value={formData.name}
                name="name"
                onChange={handleOnChange}
              />
            </FormControl>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: "12px", ml: 2 }}>
              You can use letters, numbers & periods
            </Typography>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <FormControl fullWidth size="small">
                <InputLabel id="password" shrink={Boolean(formData.password)}>
                  Password
                </InputLabel>
                <TextField
                  size="small"
                  id="password"
                  variant="outlined"
                  value={formData.password}
                  name="password"
                  onChange={handleOnChange}
                />
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel id="confirm-password" shrink={Boolean(formData.confirmPassword)}>
                  Confirm Password
                </InputLabel>
                <TextField
                  size="small"
                  id="confirm-password"
                  variant="outlined"
                  value={formData.confirmPassword}
                  name="confirmPassword"
                  onChange={handleOnChange}
                />
              </FormControl>
            </span>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: "12px", ml: 2 }}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </Typography>
            <Box sx={{ width: "100%", textAlign: "start" }}>
              <Button variant="text" size="small" disabled>
                Use my current email address instead
              </Button>
            </Box>
            <FormControl fullWidth sx={{ mt: 2 }} size="small">
              <Checkbox
                size="small"
                id="show-password"
                value={formData.showPassword}
                name="showPassword"
                onChange={handleOnChange}
              />
              <InputLabel id="show-password" shrink={Boolean(formData.showPassword)}>
                Show Password
              </InputLabel>
            </FormControl>
            <Box sx={{ mt: 2, width: "100%", display: "flex", justifyContent: "space-between" }}>
              <Button variant="text" size="small" onClick={signInInstead}>
                Sign in instead
              </Button>
              <Button variant="contained" size="small" onClick={handleNext}>
                Next
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "start",
              ml: 2,
            }}
          >
            <img
              src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
              alt="Google Logo"
              style={{ width: "100%", transform: "translateY(75px)" }}
            />
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

export default SignUp;

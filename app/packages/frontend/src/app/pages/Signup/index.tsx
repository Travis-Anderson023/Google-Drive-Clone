import { useState } from "react";

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
//import { ReactComponent as SVGLogo } from "../../../../src/assets/menu.svg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    UserName: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });
  const navigate = useNavigate();
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
            {/* <div>
          <SVGLogo />
        </div> TODO=> Moon take a look at this and explain it to me later internet says its a typescript error. See https://stackoverflow.com/questions/54121536/typescript-module-svg-has-no-exported-member-reactcomponent */}
            <Typography variant="h4" sx={{ mb: 2 }}>
              Create your Google Account
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              to continue to Google Drive
            </Typography>
            <span style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "10px" }}>
              <FormControl fullWidth size="small">
                <InputLabel id="first-name" shrink={Boolean(formData.firstName)}>
                  {" "}
                  First Name
                </InputLabel>
                <TextField
                  size="small"
                  id="first-name"
                  variant="outlined"
                  value={formData.firstName}
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </FormControl>
            </span>
            <FormControl fullWidth sx={{ mt: 2 }} size="small">
              <InputLabel id="user-name" shrink={Boolean(formData.UserName)}>
                User Name
              </InputLabel>
              <TextField
                size="small"
                id="user-name"
                variant="outlined"
                value={formData.UserName}
                // eslint-disable-next-line react/jsx-no-bind
                onChange={(e) => setFormData({ ...formData, UserName: e.target.value })}
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
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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
                // eslint-disable-next-line react/jsx-no-bind
                onChange={(e) => setFormData({ ...formData, showPassword: Boolean(e.target.value) })}
              />
              <InputLabel id="show-password" shrink={Boolean(formData.showPassword)}>
                Show Password
              </InputLabel>
            </FormControl>
            <Box sx={{ mt: 2, width: "100%", display: "flex", justifyContent: "space-between" }}>
              <Button variant="text" size="small" onClick={() => navigate("/signin")}>
                Sign in instead
              </Button>
              {/* todo Create Account */}
              <Button variant="contained" size="small">
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

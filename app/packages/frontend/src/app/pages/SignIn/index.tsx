import { useState } from "react";

import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SVGLogo } from "../../../../src/assets/menu.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
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
          {/* <div> */}
          <SVGLogo />
          <Typography variant="h4" sx={{ mb: 2 }}>
            Sign In
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            to continue to Google Drive
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="email">Email</InputLabel>
            {/* TODO moon remove this rule. */}
            {/* eslint-disable-next-line react/jsx-no-bind  */}
            <TextField
              id="email"
              variant="outlined"
              value={email}
              // eslint-disable-next-line react/jsx-no-bind
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Box sx={{ width: "100%", textAlign: "start" }}>
            <Button variant="text" size="small" disabled>
              Forgot email?
            </Button>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Not your computer? Use Guest mode to sign in privately.
          </Typography>
          <Box sx={{ width: "100%", textAlign: "start" }}>
            <Button variant="text" size="small" disabled>
              Learn More
            </Button>
          </Box>
          <Box sx={{ mt: 2, width: "100%", display: "flex", justifyContent: "space-between" }}>
            <Button variant="text" size="small" onClick={() => navigate("/signup")}>
              Create account
            </Button>
            {/* TODO moon: signin*/}
            <Button variant="contained" size="small">
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

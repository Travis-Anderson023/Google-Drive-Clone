import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, IconButton, InputAdornment, TextField, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Toolbar sx={{ display: "flex", justifyContent: "space-between", bgcolor: "divider" }}>
      <div style={{ display: "flex", alignItems: "center", width: "50%", gap: "10px" }}>
        <Button color="inherit">
          <img
            src="https://kstatic.googleusercontent.com/files/d57b24106c34c7e50ef3d98423b94ddaf35ad2da73a9b9d4d12f52dbb9dd4c08c2957f6255ab8690d5ef0b32cff8287e09577d05e479d263e872160c4c9e8363"
            alt="logo"
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
            Drive
          </Typography>
        </Button>
        <TextField
          id="outlined-start-adornment"
          size="small"
          variant="outlined"
          placeholder="Search in Drive"
          sx={{
            m: 1,
            width: "80%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              "& fieldset": {
                borderRadius: "20px",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton color="inherit" disabled>
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" disabled>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton color="inherit" disabled>
          <SettingsIcon />
        </IconButton>
        <IconButton color="inherit" disabled>
          <AppsIcon />
        </IconButton>
        <IconButton color="inherit" disabled>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </Toolbar>
  );
};

export default NavBar;

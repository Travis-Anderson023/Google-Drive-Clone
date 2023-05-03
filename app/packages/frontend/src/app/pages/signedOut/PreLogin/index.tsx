import { FormControl, InputLabel, Link, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const PreLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Box
          position="static"
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Button color="inherit">
                <img
                  src="https://kstatic.googleusercontent.com/files/d57b24106c34c7e50ef3d98423b94ddaf35ad2da73a9b9d4d12f52dbb9dd4c08c2957f6255ab8690d5ef0b32cff8287e09577d05e479d263e872160c4c9e8363"
                  alt="logo"
                />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <b>Google</b> Drive
                </Typography>
              </Button>
              <Button color="inherit">Overview</Button>
              <Button color="secondary" disabled>
                Features
              </Button>
              <Button color="secondary" disabled>
                Customers
              </Button>
              <Button color="secondary" disabled>
                Pricing
              </Button>
              <Button color="secondary" disabled>
                Download
              </Button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FormControl size="small" sx={{ width: "150px" }}>
                <InputLabel id="More Tools">More Tools</InputLabel>
                <Select disabled variant="outlined">
                  <MenuItem value={10}>Google Docs</MenuItem>
                </Select>
              </FormControl>
              <Link href="/signin" underline="none">
                <Button color="primary" variant="text" sx={{ ml: 2 }}>
                  Sign In
                </Button>
              </Link>
              <Button
                color="primary"
                variant="outlined"
                sx={{ ml: 2 }}
                size="large"
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => navigate("/signin")}
              >
                Go To Drive
              </Button>
              <Button color="primary" variant="contained" sx={{ ml: 2 }} size="large">
                Try Drive for Work
              </Button>
            </div>
          </Toolbar>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Typography variant="h2" width="25%" sx={{ mb: 2 }}>
          Easy and secure access to your content
          <Typography variant="body1" width="100%" sx={{ mt: 2 }}>
            Store, share, and collaborate on files and folders from your mobile device, tablet, or computer
          </Typography>
          <Button color="primary" variant="contained" sx={{ mr: 2 }} size="large">
            Try Drive for Work
          </Button>
          <Button color="primary" variant="outlined" sx={{ ml: 2 }} size="large">
            Go To Drive
          </Button>
          <Box sx={{ mt: 4 }} />
          <Typography variant="body1" width="100%" sx={{ mt: 2 }}>
            Dont have a Google Account?{" "}
            <Link href="/login" underline="none">
              Sign Up at no cost
            </Link>
          </Typography>
        </Typography>

        <img
          src="https://lh3.googleusercontent.com/6MmVl3TEiBeEJCFIIfzO5DIgengYGPCdhEe8M6lXA6_Eh_xsKHDL_K4CLC31dETfiCue1hFOEf30IkIqlbOStvTfYbY_G85oEtJHQqjgz6OSXco8Aw=w0-l80-sg-rj-c0xffffff"
          alt="logo"
          style={{ width: "100%", maxWidth: "800px" }}
        />
      </Box>
    </>
  );
};

export default PreLogin;

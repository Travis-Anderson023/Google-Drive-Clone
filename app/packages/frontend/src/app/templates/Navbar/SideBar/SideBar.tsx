import AddIcon from "@mui/icons-material/Add";
import { Button, Toolbar } from "@mui/material";

const SideBar = () => {
  return (
    <Toolbar
      sx={{ display: "flex", justifyContent: "space-between", bgcolor: "divider", alignItems: "start" }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50%", gap: "10px" }}
      >
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{
            m: 1,
            width: "100%",
            borderRadius: "20px",
            "& .MuiButton-startIcon": {
              mr: 1,
            },
            padding: "12px 48px",
          }}
        >
          New
        </Button>
      </div>
    </Toolbar>
  );
};

export default SideBar;

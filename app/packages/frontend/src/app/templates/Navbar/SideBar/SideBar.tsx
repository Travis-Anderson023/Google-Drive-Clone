import AddIcon from "@mui/icons-material/Add";
import { Button, Toolbar } from "@mui/material";
import { useCallback } from "react";

const SideBar = () => {
  const handleUpload = useCallback(() => {
    // todo change to mutation
  }, []);

  return (
    <Toolbar
      sx={{ display: "flex", justifyContent: "space-between", bgcolor: "divider", alignItems: "start" }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "50%", gap: "10px" }}
      >
        <Button
          component="label"
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
          onClick={handleUpload}
        >
          Upload
          <input hidden accept="image/*" multiple type="file" onChange={handleUpload} />
        </Button>
      </div>
    </Toolbar>
  );
};

export default SideBar;

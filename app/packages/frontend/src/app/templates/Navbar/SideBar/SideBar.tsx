import { ChangeEvent, useCallback } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Button, Toolbar } from "@mui/material";

import { useSingleFileUpload } from "../../../api/gql/hooks/useSingleFileUpload";

const SideBar = () => {
  const [uploadFile, { loading, error }] = useSingleFileUpload();

  const handleUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const validity = e.target.validity;
      // eslint-disable-next-line no-console
      console.log({ validity });
      const isValid = validity.valid;
      if (!isValid) {
        alert("Validity issue");
        return;
      }

      const file = e.target.files?.item(1) ?? undefined;

      if (!file) {
        alert("file not valid");
        return;
      }

      void uploadFile({ variables: { file } });
    },
    [uploadFile],
  );

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
        >
          Upload
          {/*<TextField hidden type="file" onChange={handleUpload} />*/}
          <input hidden type="file" onChange={handleUpload} />
        </Button>
      </div>
    </Toolbar>
  );
};

export default SideBar;

import { useCallback } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Button, Toolbar } from "@mui/material";

import { useSingleFileUpload } from "../../../api/gql/hooks/useSingleFileUpload";
import { useAdvancedToggle } from "../../../hooks/useAdvancedToggle";

const SideBar = () => {
  const [isDropzoneOpen, { toggle: toggleDropzone }] = useAdvancedToggle(false);
  const [uploadFile, { loading, error }] = useSingleFileUpload();

  console.log({ loading, error });

  // const handleFileDrop = useCallback(() => {
  //   console.log("A file was dropped");
  // }, []);

  const handleUpload = useCallback(
    ({
      target: {
        // validity,
        // @ts-expect-error
        files: [file],
      },
    }) => {
      // const files = event?.target?.files ?? [];
      // const validity = event?.target?.value;
      // if (!validity && files.length > 0) {
      //   console.log("error in either value of valididty");
      //   console.log({ filesLength: files.length, validity });
      //   return;
      // }
      // const file = event.target.files;

      // const formData = new FormData();
      // formData.append("file", file);

      uploadFile({ variables: { file } });
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
          <input hidden type="file" onChange={handleUpload} />
        </Button>
      </div>
    </Toolbar>
  );
};

export default SideBar;

import { Table, TableCell, TableRow, Typography } from "@mui/material";

const DisplayFiles = () => {
  const temp = [
    { fileName: "file1", fileType: "txt", fileSize: "1MB", lastModified: "1/1/2021" },
    { fileName: "file2", fileType: "txt", fileSize: "1MB", lastModified: "1/1/2021" },
    { fileName: "file3", fileType: "txt", fileSize: "1MB", lastModified: "1/1/2021" },
    { fileName: "file4", fileType: "txt", fileSize: "1MB", lastModified: "1/1/2021" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
        My Drive
      </Typography>
      <Table>
        {temp.map((file, i) => (
          <TableRow key={file.fileName} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>
              <img
                src="https://kstatic.googleusercontent.com/files/d57b24106c34c7e50ef3d98423b94ddaf35ad2da73a9b9d4d12f52dbb9dd4c08c2957f6255ab8690d5ef0b32cff8287e09577d05e479d263e872160c4c9e8363"
                alt="logo"
                style={{ width: "100px", height: "20px" }}
              />
            </TableCell>
            <TableCell>
              <Typography variant="body1" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                {file.fileName}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                {file.fileType}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                {file.fileSize}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                {file.lastModified}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default DisplayFiles;

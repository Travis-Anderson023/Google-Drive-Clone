import { Button, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { Route, Routes, Link } from "react-router-dom";
import { useToggle } from "react-use";

import { useGetAllUsersQuery } from "./api/gql/generated/schema";
import CreateUserForm from "./pages/CreateUserForm";

export const App = () => {
  const [testQuery, toggle] = useToggle(true);
  const { data } = useGetAllUsersQuery({
    skip: testQuery,
  });
  const users = data?.getAllUsers ?? [];

  return (
    <Routes>
      <Route path="/create-user" element={<CreateUserForm />} />
      <Route
        path="/page-2"
        element={
          <div>
            <Button onClick={toggle}>click me!</Button>
            <pre>{JSON.stringify(users, null, 2)}</pre>
          </div>
        }
      />
    </Routes>
  );
};

export default App;

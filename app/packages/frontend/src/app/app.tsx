import { Button } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useToggle } from "react-use";

import { useGetAllUsersQuery } from "./api/gql/generated/schema";
import CreateUserForm from "./pages/CreateUserForm";
import PreLogin from "./pages/PreLogin";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
export const App = () => {
  const [testQuery, toggle] = useToggle(true);
  const { data } = useGetAllUsersQuery({
    skip: testQuery,
  });
  const users = data?.getAllUsers ?? [];
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<PreLogin />} />
      </Routes>
    );
  }
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

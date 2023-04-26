import { Route, Routes } from "react-router-dom";
import { useToggle } from "react-use";

// import { useGetAllUsersQuery } from "./api/gql/generated/schema";
import PreLogin from "./pages/PreLogin";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
export const App = () => {
  //eslint-disable-next-line
  const [isLoggedIn, toggleLoggedIn] = useToggle(false);

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
      <Route path="/page-2" element={<div>TEST</div>} />
    </Routes>
  );
};

export default App;

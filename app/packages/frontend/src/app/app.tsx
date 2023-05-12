import { useEffect, useMemo } from "react";

import { Route, Routes } from "react-router-dom";

import { useGetUserQuery } from "./api/gql/generated/schema";
import Home from "./pages/signedIn/Home/Home";
import PreLogin from "./pages/signedOut/PreLogin";
import SignIn from "./pages/signedOut/SignIn";
import SignUp from "./pages/signedOut/Signup";
import { useApolloLinkConfig } from "./reactiveVar/apolloLinkConfigVar";

export const App = () => {
  const [{ token }, setApolloLinkConfig] = useApolloLinkConfig();
  const { data: user, loading } = useGetUserQuery({
    skip: !token,
    onError: () => {
      localStorage.removeItem("token");
      setApolloLinkConfig({ token: undefined });
    },
  });

  if (loading) {
    //so that the user doesn't see the login page for a split second
    return <div />;
  }
  if (user) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<PreLogin />} />
    </Routes>
  );
};

export default App;

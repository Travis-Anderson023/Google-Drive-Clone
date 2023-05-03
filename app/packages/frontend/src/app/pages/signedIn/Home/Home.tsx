import NavBar from "../../../templates/Navbar/Navbar";
import SideBar from "../../../templates/Navbar/SideBar/SideBar";

import DisplayFiles from "./DisplayFiles";

const Home = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "start", height: "100%" }}>
        <SideBar />
        <DisplayFiles />
      </div>
    </div>
  );
};

export default Home;

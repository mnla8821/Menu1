import Header from "./Sections/Header/Header";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;

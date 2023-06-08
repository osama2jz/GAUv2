import { Outlet } from "react-router-dom";
import {LandingHeader} from "../components/LandingHeader";
import{ LandingFooter} from "../Pages/General/LandingFooter";
const Layout = () => {
  return (
    <>
      <LandingHeader />
      <Outlet />
      <LandingFooter />
    </>
  );
};
export default Layout;

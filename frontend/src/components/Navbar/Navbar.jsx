import { useContext } from "react";
import adminContext from "../../contextApi/createContext";

const Navbar = () => {
  const { adminDetails } = useContext(adminContext);
  console.log("adminDetails-", adminDetails);
  return <nav>nav</nav>;
};

export default Navbar;

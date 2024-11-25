// import { useState } from "react";
// import adminContext from "./createContext";

// // eslint-disable-next-line react/prop-types
// const AdminProvider = ({ children }) => {
//   const [adminDetails, setAdminDetails] = useState({
//     isLoggedIn: false,
//     adminName: "",
//   });

//   const logOut = () => {
//     setAdminDetails((pre) => ({ ...pre, isLoggedIn: false }));
//   };

//   return (
//     <adminContext.Provider value={{ adminDetails, setAdminDetails, logOut }}>
//       {children}
//     </adminContext.Provider>
//   );
// };

// export default AdminProvider;

import "./App.css";
import AdminProvider from "./contextApi/createProvider";
import RouteComp from "./routes/Routes";

function App() {
  return (
    <AdminProvider>
      <RouteComp />
    </AdminProvider>
  );
}

export default App;

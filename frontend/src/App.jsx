import "./App.css";
import AdminProvider from "./contextApi/createProvider";
import HomePage from "./pages/HomePage/Home";

function App() {
  return (
    <AdminProvider>
      <HomePage />
    </AdminProvider>
  );
}

export default App;

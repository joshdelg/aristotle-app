import { Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar style={{height: "8vh"}} />
      <Dashboard />
    </div>
  );
}

export default App;

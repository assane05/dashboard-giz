import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewDashboard from "./components/dashboard/ViewDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ViewDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

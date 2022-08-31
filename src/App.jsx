import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./pages/homepage/Homepage";
import Dashboard from "./pages/dashboard/Dashboard";
import Form from "./pages/form/Form";
import Nav from "./components/Nav/nav";
const App = () => {
  return (
    <main className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/registration" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </main>
  );
};

export default App;

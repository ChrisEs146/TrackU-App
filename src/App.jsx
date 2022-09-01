import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./pages/homepage/Homepage";
import Dashboard from "./pages/dashboard/Dashboard";
import Form from "./pages/form/Form";
import Nav from "./components/Nav/nav";
const App = () => {
  // Setting the sidebar activation and deactivation state
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  /**
   * Handler to change the sidebar state. It's used in the nav component
   * and in the sidebar itsef, which is located in the dashboard.
   */
  const handleSidebarState = () => setIsSidebarActive(!isSidebarActive);

  return (
    <main className="app">
      <BrowserRouter>
        <Nav handleSidebarState={handleSidebarState} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/registration" element={<Form />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                handleSidebarState={handleSidebarState}
                isSidebarActive={isSidebarActive}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </main>
  );
};

export default App;

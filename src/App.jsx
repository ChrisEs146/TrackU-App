import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Homepage from "./pages/homepage/Homepage";
import Dashboard from "./pages/dashboard/Dashboard";
import Form from "./pages/form/Form";
import Nav from "./components/Nav/nav";
import Settings from "./pages/settings/Settings";
import UserUpdate from "./pages/settings/userUpdate/UserUpdate";
import UserDelete from "./pages/settings/userDelete/UserDelete";
import ChangePassword from "./pages/settings/changePassword/ChangePassword";
import Projects from "./pages/projects/Projects";
import Project from "./pages/project/Project";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import { SidebarProvider } from "./contexts/SidebarContext";
import { AddFormProvider } from "./contexts/AddFormContext";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <main className="app">
      <BrowserRouter>
        <SidebarProvider>
          <AddFormProvider>
            <Nav />
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/registration" element={<Form />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<Projects />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="project/:projectId" element={<Project />} />
                  <Route path="settings" element={<Settings />}>
                    <Route index element={<UserUpdate />} />
                    <Route path="update-user" element={<UserUpdate />} />
                    <Route path="delete-user" element={<UserDelete />} />
                    <Route path="change-password" element={<ChangePassword />} />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </AddFormProvider>
        </SidebarProvider>
      </BrowserRouter>
      <ToastContainer />
    </main>
  );
};

export default App;

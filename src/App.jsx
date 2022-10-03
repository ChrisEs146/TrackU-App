import { Routes, Route } from "react-router-dom";
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
import "react-toastify/dist/ReactToastify.css";
import ProjectList from "./pages/projectList/ProjectList";
import DynamicForm from "./components/DynamicForm/DynamicForm";

const App = () => {
  return (
    <main className="app">
      <Nav />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/registration" element={<Form />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Projects />} />
            <Route path="projects" element={<Projects />}>
              <Route index element={<ProjectList />} />
              <Route path="add-project" element={<DynamicForm type="Project" editMode={false} />} />
              <Route path=":projectId" element={<Project />} />
              <Route
                path="edit-project/:projectId"
                element={<DynamicForm type="Project" editMode={true} />}
              />
              <Route path="add-update" element={<DynamicForm type="Update" editMode={false} />} />
              <Route
                path="edit-update/:updateId"
                element={<DynamicForm type="Update" editMode={true} />}
              />
            </Route>
            <Route path="settings" element={<Settings />}>
              <Route index element={<UserUpdate />} />
              <Route path="update-user" element={<UserUpdate />} />
              <Route path="delete-user" element={<UserDelete />} />
              <Route path="change-password" element={<ChangePassword />} />
            </Route>
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </main>
  );
};

export default App;

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import UserCard from "../../components/UserCard/UserCard";
import "./settings.css";
const Settings = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <section className="settings">
      <h2>Settings</h2>
      <div className="settings-form-container">
        <div className="settings__user-info">
          <UserCard fullName={userData.fullName} />
        </div>
        <div className="settings__form">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Settings;

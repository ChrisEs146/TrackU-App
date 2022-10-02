import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import UserCard from "../../components/UserCard/UserCard";
import "./settings.css";

/**
 * Settings page containing the userCard information
 * and either the change password form,
 * update user form or the delete user form.
 * @returns Settings page
 */
const Settings = () => {
  const { userData } = useSelector((state) => state.user);

  // Modal windows activation and deactivation state
  const [isConfirmActive, setIsConfirmActive] = useState(false);

  // Modal window handlers
  const handleConfirmActivation = () => setIsConfirmActive(!isConfirmActive);
  return (
    <section className="settings">
      <h2 className="settings__title">Settings</h2>
      <div className="settings__form-container">
        <div className="settings__user-info">
          <UserCard fullName={userData.fullName} />
        </div>
        <div className="settings__form">
          <Outlet context={[isConfirmActive, handleConfirmActivation]} />
        </div>
      </div>
    </section>
  );
};

export default Settings;

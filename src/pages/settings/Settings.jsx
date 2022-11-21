import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserCard from "../../components/UserCard/UserCard";
import { useGetUserQuery } from "../../store/slices/ApiSlices/userApiSlice";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import "./settings.css";

/**
 * Settings page containing the userCard information
 * and either the change password form,
 * update user form or the delete user form.
 * @returns Settings page
 */
const Settings = () => {
  useDocumentTitle("Settings");
  const { data: user, isSuccess } = useGetUserQuery();

  // Modal windows activation and deactivation state
  const [isConfirmActive, setIsConfirmActive] = useState(false);

  // Modal window handlers
  const handleConfirmActivation = () => setIsConfirmActive(!isConfirmActive);

  return (
    <section className="settings">
      <h2 className="settings__title">Settings</h2>
      <div className="settings__form-container">
        <div className="settings__user-info">
          <UserCard fullName={user?.fullName} />
        </div>
        <div className="settings__form">
          <Outlet context={[isConfirmActive, handleConfirmActivation, user, isSuccess]} />
        </div>
      </div>
    </section>
  );
};

export default Settings;

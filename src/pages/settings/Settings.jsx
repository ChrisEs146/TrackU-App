import { useSelector } from "react-redux";
import UserCard from "../../components/UserCard/UserCard";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineUserDelete } from "react-icons/ai";
import "./settings.css";
const Settings = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <section className="settings">
      <h2>Settings</h2>
      <div className="settings-form-container">
        <div className="settings__user-info">
          <UserCard fullName={userData.fullName} />
          <div className="settings__user-btns">
            <button className="settings__update-btn">
              <FaUserEdit /> Update User
            </button>
            <button className="settings__delete-btn">
              <AiOutlineUserDelete /> Delete User
            </button>
          </div>
        </div>
        <form className="settings__form"></form>
      </div>
    </section>
  );
};

export default Settings;

import { TailSpin } from "react-loader-spinner";
import "./spinner.css";

/**
 * Loading spinner to be used while waiting for data.
 * @returns Spinner component
 */
const LoadingSpinner = () => {
  return (
    <div className="spinner_container">
      <TailSpin
        height="30"
        width="30"
        ariaLabel="Loading content"
        radius="1"
        color="#5C2E7E"
        visible={true}
      />
      <span>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;

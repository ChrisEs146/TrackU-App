import { TailSpin } from "react-loader-spinner";

/**
 * Loading spinner to be used while waiting for data.
 * @returns Spinner component
 */
const LoadingSpinner = () => {
  return (
    <>
      <TailSpin
        height="30"
        width="30"
        ariaLabel="Loading content"
        radius="1"
        color="#5C2E7E"
        visible={true}
      />
      <span>Loading...</span>
    </>
  );
};

export default LoadingSpinner;

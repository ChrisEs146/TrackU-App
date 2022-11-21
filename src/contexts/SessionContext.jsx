import { useState, createContext } from "react";

const SessionContext = createContext([{ sessionStatus: null, sessionHandler: () => {} }]);

const SessionProvider = (props) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const handleLoggingOut = (value = true) => setIsLoggingOut(value);

  return (
    <SessionContext.Provider
      value={{ sessionStatus: isLoggingOut, sessionHandler: handleLoggingOut }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, SessionContext };

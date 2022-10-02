import { useState, createContext } from "react";

// Sidebar state context
const SidebarContext = createContext([{ sidebarStatus: null, sidebarHandler: () => {} }]);

/**
 * Sidebar provider component to share
 * the sidebar activation state globally
 * @param {*} props
 * @returns Sidebar provider component
 */
const SidebarProvider = (props) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  /**
   * Handler to activate and deactivate the sidebar
   */
  const handleSidebarState = () => setIsSidebarActive(!isSidebarActive);

  return (
    <SidebarContext.Provider
      value={{ sidebarStatus: isSidebarActive, sidebarHandler: handleSidebarState }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider, SidebarContext };

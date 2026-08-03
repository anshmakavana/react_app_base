import { createContext, useContext, useState } from "react";

const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'categories', 'areas', 'mobile-nav', null
  const [activeSidebar, setActiveSidebar] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeAllPanels = () => {
    setIsDropdownOpen(false);
    setIsSidebarOpen(false);
  };

  return (
    <UiContext.Provider
      value={{
        activeDropdown,
        setActiveDropdown,
        activeSidebar,
        setActiveSidebar,
        isDropdownOpen,
        setIsDropdownOpen,
        isSidebarOpen,
        setIsSidebarOpen,
        closeAllPanels,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export const useUi = () => useContext(UiContext);

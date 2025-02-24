import { Children, createContext, useState } from "react";
import { Outlet } from "react-router";

export let SideBarActive = createContext();
export default function ProviderSideBarActive({children}) {
  let [activeItem, setActiveItem] = useState(0);
 return <SideBarActive.Provider value={{activeItem, setActiveItem}}>{children}</SideBarActive.Provider>;
} 
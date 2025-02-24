import { createContext, useState } from "react";

export let UserContext = createContext({});

export function UserContextProvider({ children }) {
    let [user, setUser] = useState({});
    return <UserContext.Provider value={{ user, setUser }}>
       {children}
   </UserContext.Provider>
}
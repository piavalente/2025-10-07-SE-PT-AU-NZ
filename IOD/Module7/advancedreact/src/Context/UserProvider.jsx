import { createContext } from "react";
import { useState} from "react";

export const UserContext = createContext(); //first step is to create a context

export function UserProvider(props) {
    const [currentUser, setCurrentUser] = useState({});

    function handleUpdateUser(user) {
        setCurrentUser(user);
    }

    return (
        <UserContext.Provider value = {{ currentUser, handleUpdateUser}}>
            {props.children}
        </UserContext.Provider>
    );
}
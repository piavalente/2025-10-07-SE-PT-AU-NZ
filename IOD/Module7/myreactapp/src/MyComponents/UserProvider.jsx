//create context
import { createContext } from "react";
import { useState } from "react";

//will hold user data
//expotred to be used by any component
export const userContext = createContext(); // 1st step to create a context

//We will use this user provider to store the user information in this context.
//This component wraps your app and gives all child components access to the user data
export function UserProvider (props) {

    //stored in the Context to be available across all the components
    const [currentUser, setCurrentUser] = useState ({});

    //function to update the user
    function handleUpdateUser(user) {
        setCurrentUser(user);
    }

        return (
            <>
                <userContext.Provider value = {{currentUser, handleUpdateUser}}>
                    {props.children}
                </userContext.Provider>
            </>
        );
            
    }
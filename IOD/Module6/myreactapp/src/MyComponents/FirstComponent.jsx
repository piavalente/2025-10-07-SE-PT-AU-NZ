//this javascript FUNCTION COMPONENT 
//declare the component - return JSX - export the component

import SimpleForm from "./SimpleForm"; //import SIMPLEFORM.JSX
function FirstComponent() //component function with declaration and name. EXPORT in the app.jsx
{
    return ( //return a JSX
        <>
            <h1>My First React Component</h1> 
            <SimpleForm></SimpleForm>
           
        </>
    );
}

//export component from this file. since its onl a single component within the same file..
export default FirstComponent; 





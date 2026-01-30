//export function SecondComponent() //if there is multiple function, put export here.

import SimpleForm from "./SimpleForm";

export function SecondComponent() {
    return (
        <>
            <h2>Second Component</h2>
            {/*<button onCLick = {alert("Hello from second component")}>Submit</button>
            <button onClick ={() => alert("Hello again")}>Submit</button>*/}
            <SimpleForm></SimpleForm>
        </>
    );
}

export function SubSecondComponent () {
    return (
        <>
            <h3>Sub Second Component from Second Component File</h3>
        </>
    )
}



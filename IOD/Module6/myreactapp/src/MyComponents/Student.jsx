
function Student(props)  {
    return (
        <>
            <div>
                <h1>Student</h1>
                <label>FirstName: {props.firstName}</label>   
            </div>
            <div>
                <label>LastName: {props.lastName}</label> {/*PASS THE ATTRIBUTE*/}
            </div>
            <div>
                {props.children}
            </div>
        </>
    );
}

export default Student;


/*
DESTRUCTURING

function Student ({firstName, lastName = "cooper - for default", children}) // object destructuring - no need to use props {props.firstName}
{
    return (
        <>
            <h1>Student</h1>
            <div>
                 <label>FirstName: {firstName}</label>
            </div>
            <div>
                <label>LastName: {lastName}</label>
            </div>
            <div>
                {children} 
            </div>
        </>
    );
}

*/





//if you want to use parameter from student on app.jsx, add the parameter (props)
//PROPS is a special type of object which is a parameter for any React component which will facilitate attribute data.
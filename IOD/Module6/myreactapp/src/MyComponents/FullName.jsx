import NamePart from "./NamePart" //fullName can have namePart

function FullName ({firstName, lastName})
{
    return (
        <>
            <div>
                Full Name: <NamePart name = {firstName}></NamePart> <NamePart name = {lastName}></NamePart> {/*can be repeated to show first and last name*/}
            </div>
        </>
    );
}

export default FullName
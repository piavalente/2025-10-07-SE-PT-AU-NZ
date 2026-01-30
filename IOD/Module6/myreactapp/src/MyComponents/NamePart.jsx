//NamePart is a component that will accept props as any name. (firstName,middleName,lastName)

function NamePart (props)
{
    return (
        <>
            <div>{props.name}</div>
        </>
    );
}

export default NamePart

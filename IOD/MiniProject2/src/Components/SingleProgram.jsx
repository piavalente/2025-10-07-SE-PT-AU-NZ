import Typography from "@mui/material/Typography"

function SingleProgram ({name, info, image}) 
{
    return (
        <>
            <ul>
                <li>
                    <Typography variant= "h2">{name}</Typography>
                    <Typography variant= "h3">{info}</Typography>

                    <div>
                        <img src= {image}></img>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default SingleProgram;
/*
function Greeting(props) {
    return (
        <>
            <div>
                <p style={{
                color: 'black',
                fontSize: '60px',
                fontWeight: 'bold',
                fontFamily: "'Brush Script MT', cursive"
            }}>
                Hello {props.children}
            </p>
            </div>

        </>
        
        
    );
}

export default Greeting;

*/



function Greeting({ name = "World", children }) {
  return (
    <>
      <strong style={{ fontSize: "60px" }}>{name}</strong>
      <div>{children}</div>
    </>
  );
}

export default Greeting;

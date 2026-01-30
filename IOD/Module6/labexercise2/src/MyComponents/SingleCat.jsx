function SingleCat({ name, latinName, imageUrl }) {
  return (
    <>
        <ul>
            <li>
                <h3 style = {{fontFamily: "Brush Script MT", fontSize: "60px", marginBottom: 0}}>{name}</h3>
                <h2 style = {{fontFamily: "Arial", fontSIze: "20px", marginTop: -10}}>{latinName}</h2>
                
                <div>
                    <img 
                    src= {imageUrl}
                    style = {{width: '600px', height: '400px', borderRadius: '10px' }}
                    />
                </div>
                
            </li>
        </ul>
    </>
  );
}

export default SingleCat;

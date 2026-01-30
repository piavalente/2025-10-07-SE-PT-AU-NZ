import '../App.css'; // at the top of App.jsx
// componentBox class styles a component into a box
// Welcome class identifies this component

function Welcome(props) {
  return (
    <div className="componentBox">
      <h3
        style={{
          backgroundColor: 'pink',
          textTransform: 'uppercase' // with inline styling
        }}
      >
        Welcome {props.name}!
      </h3>
    </div>
  );
}

export default Welcome;

import "../App.css";
import UserInfo from "./UserInfo";
import FormattedDate from "./FormattedDate";

function ComplexComment(props) {
  return (
    <div className="Comment componentBox">
      <UserInfo author={props.author}></UserInfo>
      <div className="Comment-text">
        {" "}
        {props.text}
      </div>
      <FormattedDate date ={props.date}></FormattedDate>
    </div>
  );
}

export default ComplexComment;

import { useState, useEffect } from "react";
import { useData } from "../Hooks/useData";
import { useContext } from "react";
import { userContext } from "./UserProvider";
import { MyThemeContext } from "./MyThemeProvider";

function ActivityFinder() {
  const [participants, setParticipants] = useState(1);

  const { currentUser } = useContext(userContext);
  const {theme} = useContext(MyThemeContext);

  //Fetch data and activity
  const data = useData(
    'https://www.boredapi.com/api/activity?participants=' + participants
  );

  const activity = data ? data.activity : "not found";


  /*
  const [activity, setActivity] = useState("");

  useEffect(() => {
    console.log("use effect called")
    // Fetch activity when component mounts or participants change
    fetch("https://bored.api.lewagon.com/api/activity?participants=" + participants)
      .then((response) => response.json())
      .then((json) => {
        setActivity(json.activity);
      });

    // Cleanup function (optional here, mostly for demonstration)
    return () => {
      console.log('cleanup called');
    };
  }, [participants]); // dependencies
  */


  return (
  <>
      {currentUser.user ? (
        <div className="ActivityFinder componentBox">
          <div style={{ backgroundColor: theme.background }}>
            <h3>Activity Finder</h3>
            <label>
              Choose number of participants:
              <select
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </label>
            <div>
              <strong>Suggested Activity: </strong>
              {activity}
            </div>
          </div>
        </div>
        ) : ( <p>No user has logged in</p>
      )}
    </>
  );
}

// ++ Reference: https://bored.api.lewagon.com/documentation

export default ActivityFinder;
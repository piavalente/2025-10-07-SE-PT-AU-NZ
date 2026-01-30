import { useState, useEffect } from "react";

function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState("");

  useEffect(() => {
    // Fetch activity when component mounts or participants change
    fetch("https://bored.api.lewagon.com/api/activity?participants=" + participants)
      .then((response) => response.json())
      .then((json) => {
        setActivity(json.activity);
      });

    // Cleanup function (optional here, mostly for demonstration)
    return () => {
      console.log('cleanup effect');
    };
  }, [participants]); // dependencies


  return (
    <div className="ActivityFinder componentBox">
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
  );
}

// ++ Reference: https://bored.api.lewagon.com/documentation

export default ActivityFinder;
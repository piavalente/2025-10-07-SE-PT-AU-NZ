import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom"; //navigate to whatever path you mention
import { Outlet } from "react-router-dom"; //is where the child route’s component gets rendered.


export default function DashboardPage() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate(); //type of hook from react router dom

  return (
    <div className="DashboardPage componentBox">
      <h1>Dashboard</h1>
      <Outlet />
      <button onClick={() => navigate("/dash/tasks")}>Show Tasks</button>
      <button onClick={() => navigate("/dash/messages")}>Show Messages</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}



export function DashboardTasks(props) {
  const tasks = [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Decide on capstone project" },
    { id: 3, name: "Learn databases" },
  ];
  return (
    <div className="DashboardTasks">
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}



export function DashboardMessages(props) {
  // const { currentUser } = useContext(UserContext);
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard</p>
    </div>
  );
}


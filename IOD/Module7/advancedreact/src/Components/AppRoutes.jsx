import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import DashboardPage, {
  DashboardMessages,
  DashboardTasks,
} from "./DashboardPage";
import PostsPage, { Post, PostList } from "./PostPage";
import LoginForm from "./LoginForm";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  //put this in app.jsx
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      {/*or use this default child route. It renders when the parent route’s path is matched exactly: <Route index element = {<HomePage></HomePage>}></Route>  */}
      <Route path="/Login" element={<LoginForm></LoginForm>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route
        path="/Contact"
        element={
          <ProtectedRoute>
            <Contact></Contact>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/Dash"
        element={
          <ProtectedRoute>
            <DashboardPage></DashboardPage>
          </ProtectedRoute>
        }
      >
        <Route path="tasks" element={<DashboardTasks></DashboardTasks>}></Route>
        <Route
          path="messages"
          element={<DashboardMessages></DashboardMessages>}
        ></Route>
      </Route>
      <Route>
        <Route path="/Posts" element={<PostsPage></PostsPage>}>
          {" "}
          {/*An index route is the default child route of a parent route. It renders when the parent route’s path matches exactly, without any additional sub-path.*/}
          <Route index element={<PostList></PostList>}></Route>
          <Route path=":id" element={<Post></Post>}></Route>
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>{" "}
      {/*Match any URL that does NOT match other routes.*/}
    </Routes>
  );
}

export default AppRoutes;

import { Outlet } from "react-router-dom";
import { useData } from "../Hooks/useData";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function PostsPage() {
  //Parent route of PostList and Post
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />{" "}
      {/*Will make sure PostList and will be displayed here when rendred*/}
    </div>
  );
}

export function PostList() {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const limit = searchParams.get("limit")? searchParams.get("limit") : 5;

  const postsData = useData(
    "https://jsonplaceholder.typicode.com/posts?_limit=" + limit //will only pass a limit of 5 posts
  );

  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>{" "}
      {/*Post component will be displayed when this is clicked*/}
    </li>
  ));
  return (
    <>
      <ul>{postList}</ul><Link to="/posts?limit=10">Load 10 Posts</Link>
    </>
  );
}

export function Post() {
  const { id } = useParams(); // custom hook to access dynamic
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);
  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
}

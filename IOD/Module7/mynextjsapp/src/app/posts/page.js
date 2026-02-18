import Link from "next/link";
import PostsLimit from "@/Components/PostsLimit";

export default async function posts({searchParams}) {
  const {limit} = await searchParams;
  let defaultLimit = 5;
  if (limit !=null) defaultLimit = limit;
  const posts = await getPostsData(5);
  const postList = posts.map((post) => (
    <li key={post.id}>
      <Link href={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <>
      <div className="Posts">
        <h1>Posts</h1>
        <ul>{postList}</ul>
      </div>
      <div>
        <PostsLimit defaultlimit = {limit}></PostsLimit>
      </div>
    </>
  );
} // ++ Update the NavBar to include this new /posts page route

// Save as app/posts/page.jsx and copy layout.jsx from /about
async function getPostsData(limit, page = 1) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/" +
      "posts?_limit=" +
      limit +
      "&_page=" +
      page,
  );

  if (!res.ok) {
    // Recommendation: handle errors
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Posts");
  }
  return res.json();
}

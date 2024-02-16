// import React from "react";
// import { selectAllPosts } from "./postaSlice";
// import { useSelector } from "react-redux";
// import PostAuthor from "./postAuthor";
// import TimeAgo from "./TimeAgo";

// const Postslist = () => {
//   const posts = useSelector(selectAllPosts);
//   const orderedposts = posts
//     .slice()
//     .sort((a, b) => b.date.localeCompare(a.date));
//   const renderedPosts = orderedposts.map((post) => (
//     <article key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content.substring(0, 100)}</p>
//       <p className="postCredit">
//         <PostAuthor userId={post.userId} />
//         <TimeAgo timestamp={post.date} />
//       </p>
//     </article>
//   ));
//   return (
//     <div>
//       <h2>Posts</h2>
//       {renderedPosts}
//     </div>
//   );
// };

// export default Postslist;

import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postaSlice";
import PostAuthor from "./postAuthor";
import TimeAgo from "./TimeAgo";
import Reactionbutton from "./Reactionbutton";
const Postslist = () => {
  //   const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const orderedposts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderedposts = orderedposts.map((post) => (
    <article key={posts.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <Reactionbutton post={post} />
    </article>
  ));
  return (
    <section>
      <h2>POSTS</h2>
      {renderedposts}
    </section>
  );
};

export default Postslist;

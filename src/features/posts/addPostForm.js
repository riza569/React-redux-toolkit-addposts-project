// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postaSlice";
import { selectAllUsers } from "../users/usersSlice";

// import { selectAllUsers } from "../users/usersSlice";
// import { postAdded } from "./postaSlice";

// export const AddPostForm = () => {
//   const [title, setTitle] = useState("");

//   const [content, setContent] = useState("");

//   const [userId, setUserId] = useState("");

//   const dispatch = useDispatch();

//   const users = useSelector(selectAllUsers);

//   const onSavePostClicked = () => {
//     if (title && content) {
//       dispatch(postAdded(title, content, userId));
//     }
//     setTitle("");
//     setContent("");
//   };
//   const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

//   const usersoption = users.map((user) => (
//     <option key={user.id} value={user.id}>
//       {user.name}
//     </option>
//   ));

//   return (
//     <section>
//       <h2>Add a New Posts</h2>
//       <form>
//         <label htmlFor="postTitle">Post Title</label>
//         <input
//           id="postTitle"
//           type="text"
//           name="postTitle"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <label htmlFor="postAuthor">Author:</label>
//         <select
//           id="postAuthor"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         >
//           <option value=""></option>
//           {usersoption}
//         </select>

//         <label htmlFor="postContent">Post Content</label>
//         <textarea
//           id="postContent"
//           name="postContent"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <button onClick={onSavePostClicked} type="button" disabled={!canSave}>
//           Save posts
//         </button>
//       </form>
//     </section>
//   );
// };

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers);
  const handleSaved = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }
  };
  const useroption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section>
      <h1>ADD POSTS</h1>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          value={title}
          id="postTitle"
          name="postTitle"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="postAuthor">Author</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {useroption}
        </select>

        <label htmlFor="postContent">Post Content</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSaved} type="button">
          Save Posts
        </button>
      </form>
    </section>
  );
};

// import { useSelector } from "react-redux";
// import { selectAllUsers } from "../users/usersSlice";

// const PostAuthor = ({ userId }) => {
//   const users = useSelector(selectAllUsers);
//   const authors = users.find((user) => user.id === userId);
//   return <span> by {authors ? authors.name : "unknown author"}</span>;
// };

// export default PostAuthor;

import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const authors = users.find((user) => user.id === userId);
  return <span>by {authors ? authors.name : "unknown author"}</span>;
};

export default PostAuthor;

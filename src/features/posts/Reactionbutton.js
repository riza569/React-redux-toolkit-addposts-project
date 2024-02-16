import { useDispatch } from "react-redux";
import { reactionAdded } from "./postaSlice";

const reactionsEmoji = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "💖",
  rocket: "🚀",
  coffee: "☕",
};
const Reactionbutton = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionsEmoji).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          className="reactionButton"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji}
          {post.reactions[name]}
        </button>
      );
    }
  );
  return <div>{reactionButtons}</div>;
};

export default Reactionbutton;

// import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { sub } from "date-fns";
// const initialState = [
//   {
//     id: "1",
//     title: "learning redux Toolkit",
//     content: "i have heard good things",
//     date: sub(new Date(), { minutes: 10 }).toISOString(),
//   },
//   {
//     id: "2",
//     title: "slices...",
//     content: "The more i say slice,the more i want pizza",
//     date: sub(new Date(), { minutes: 5 }).toISOString(),
//   },
// ];

// const postsSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     postAdded: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(title, content, userId) {
//         return {
//           payload: {
//             id: nanoid(),
//             title,
//             content,
//             date: new Date().toISOString(),
//             userId,
//           },
//         };
//       },
//     },
//   },
// });

// export const selectAllPosts = (state) => state.posts;
// export const { postAdded } = postsSlice.actions;
// export default postsSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "all i want is you",
    content: "this is a poem wriiten by ninte achane",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "linear expansion",
    content:
      "But y But y the coefficient of linear expansion and heamogoblin...",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            title,
            content,
            date: new Date().toISOString(),
            userId,
            id: nanoid(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },

    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});
export default postsSlice.reducer;
export const { postAdded, reactionAdded } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts;

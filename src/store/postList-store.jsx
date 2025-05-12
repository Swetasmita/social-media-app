import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "GET_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);
  const [fetching, setFetching] = useState(false);

  // Function to add a post
  const addPost = (post) => {
    const addPostAction = {
      type: "ADD_POST",
      payload: {
        post,
      },
    };
    dispatchPostList(addPostAction);
  };

  // Function to get initial posts from the server
  const getPost = (posts) => {
    const getPostAction = {
      type: "GET_POST",
      payload: {
        posts,
      },
    };
    dispatchPostList(getPostAction);
  };

  // Function to delete a post
  const deletePost = (postId) => {
    console.log("Post ID to be deleted: ", postId);
    const deletePostAction = {
      type: "DELETE_POST",
      payload: { postId },
    };
    dispatchPostList(deletePostAction);
  };

  //Get posts data from the server
  useEffect(() => {
    setFetching(true);
    //console.log("Data fetching is loading...");
    //Advance clean up process for Data fetching
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        getPost(data.posts);
        setFetching(false);
        //console.log("Data fetching done");
      })
      //console.log("Data fetching ended");
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setFetching(false);
      });
    return () => {
      controller.abort();
      //console.log("UseEffect Cleanup");
    };
  }, []);

  return (
    <PostListContext.Provider
      value= {{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;

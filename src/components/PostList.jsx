import React, { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/postList-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListContext);
  //console.log(postList);

  return (
    <>
      {/* Show here either welcome message or posts */}
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;

import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../store/postList-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </div>
        <p className="card-text">{post.body} </p>
        {post.tags.map((tag) => (
          <span className="badge bg-primary post-hashtag" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-success post-reactions" role="alert">
          This post has been 👍 liked by {post.reactions?.likes ?? 0} people.
        </div>
      </div>
    </div>
  );
};

export default Post;

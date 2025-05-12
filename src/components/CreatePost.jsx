import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/postList-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    // Split the tags by space and remove empty space
    const tags = tagsElement.current.value.split(" ");

    //Reset the input fields after adding the item
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    //stop preventing empty values in the form
    if (!userId || !postTitle || !postBody || !reactions || tags.length === 0) {
      alert("Please fill all the fields!");
      return;
    }
  //Send/add Post
  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({  
      id: Date.now(), 
      title: postTitle,
      body: postBody,
      reactions: {
        likes: parseInt(reactions),
        dislikes: 0,
      },
      userId: userId,
      tags: tags,
    })
})
.then(res => res.json())
.then(post => {
  console.log(post);
  addPost(post);
  navigate("/");
  }); 
};

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today?.."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          className="form-control"
          id="body"
          rows="3"
          placeholder="Tell us more about it..."
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to your posts"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please keep space between hashtags!"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;

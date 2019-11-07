import React from "react";
import { useState, useEffect } from "react";

var Reddit = ({ subReddit = "reactjs" }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //Fetch the data
    fetch(`https://www.reddit.com/r/${subReddit}.json`)
      .then(res => res.json())
      .then(json => setPosts(json.data.children.map(c => c.data)));
  }, [subReddit, setPosts]);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Reddit;

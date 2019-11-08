import React from "react";
import { useState, useEffect } from "react";

var Reddit = ({ subReddit = "reactjs" }) => {
  const [posts, setPosts] = useState([]);

  var checker = async () => {
    //Gets the url
    var url = `https://www.reddit.com/r/${subReddit}.json`;

    //Fetch the data from the url
    var response = await fetch(url);

    //Turn the data into json
    var json = await response.json();

    if (json.message == "Not Found") {
      alert("There is no subreddit with that name");
    } else {
      setPosts(json.data.children.map(c => c.data));
    }
  };

  useEffect(() => {
    checker();
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

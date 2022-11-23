import React, { useEffect, useState } from "react";
import "./Style.css";
function Assignment2() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPosts(result.products);
      });
  }, []);
  return (
    <div className="item">
      {posts
        .filter((post1) => post1.id == 1)
        .map((post) => (
          <p key={post}>
            <img src={post.thumbnail} />
            <br />
            {post.title} ({post.description})<br />
            <b>Rs. {post.price}</b><br/>
            Rating. {post.rating}
          </p>
        ))}
    </div>
  );
}

export default Assignment2;

import React, { useReducer, useEffect } from "react";
import './Style.css';
import axios from "axios";
const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: " ",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

function Fetchusereducer() {
  const [state, dispach] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        dispach({ type: "FETCH_SUCCESS", payload: response.data.products });
        console.log(response);
      })
      .catch((error) => {
        dispach({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div className="container">
      <div className="item">
        {state.loading
          ? "Loading"
          : state.post
          // .filter((post1) => post1.id == 1)
          .map((posts) => (
              <div className="image" key={posts.id}>
                <img src={posts.thumbnail} />
                <br />
                <p>
                {posts.title} ({posts.description})<br />
                <b>Rs. {posts.price}</b>
                <br />
                Rating. {posts.rating}
                </p>
              </div>
            ))}
        {state.error ? state.error : null}
      </div>
    </div>
  );
}

export default Fetchusereducer;

import React from "react";

export default function Post({ post }) {
  const { title, text } = post;
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

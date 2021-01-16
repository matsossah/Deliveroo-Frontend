import React from "react";

const Cover = (props) => {
  const { title, text, imageURL } = props;
  return (
    <div className="cover">
      <div className="cover-desc">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <img src={imageURL} alt="coverPic" />
    </div>
  );
};
export default Cover;

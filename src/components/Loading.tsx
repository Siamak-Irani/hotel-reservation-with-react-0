import React from "react";
import loadingGif from "../files/images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="capitalize text-center mt-12">
      <h4>rooms data loading....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;

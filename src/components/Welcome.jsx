import React from "react";

const Welcome = ({ welcome }) => {
  return (
    <>
      <div className="background">
        <h2 className="welcome">{welcome}</h2>
      </div>
    </>
  );
};

export default Welcome;
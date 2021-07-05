import React from "react";

const PlayNumber = (props) => {
  return (
    <button className='number' onClick>
      {props.number}
    </button>
  );
};

export default PlayNumber;

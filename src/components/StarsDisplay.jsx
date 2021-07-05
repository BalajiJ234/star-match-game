import React from "react";
import { utils } from "../helpers";

const StarsDisplay = (props) => {
  return (
    <React.Fragment>
      {utils.range(1, props.stars).map((starId) => (
        <div key={starId} className='star' />
      ))}
    </React.Fragment>
  );
};

export default StarsDisplay;

import React from "react";
import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes["load-9"]}>
      <div className={classes["spinner"]}>
        <div className={classes["bubble-1"]}></div>
        <div className={classes["bubble-2"]}></div>
      </div>
    </div>
  );
};

export default Spinner;

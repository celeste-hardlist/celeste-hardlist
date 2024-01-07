import React from "react";
import UpdateBook from "../components/UpdateBook.js";

export const UpdateLog = () => {
  return (
    <div className="commonPage">
      <h1>Hardlist Monthly Update Log</h1>
      <div className="book">
        <UpdateBook title="WIP"/>
      </div>
    </div>
  );
};

export default UpdateLog;
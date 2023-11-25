import React from "react";
import Book from "../components/Book.js";

export const FAQ = () => {
  return (
    <div className="commonPage" margin="0" height="100%" overflow="hidden">
      <h1>Hardlist FAQ</h1>
      <div className="book">
        <Book title="FAQ" />
      </div>
    </div>
  );
};

export default FAQ;

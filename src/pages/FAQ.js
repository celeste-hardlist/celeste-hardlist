import React from "react";
import Book from "../components/Book.js";

export const FAQ = () => {
  return (
    <div className="faq" margin="0" height="100%" overflow="hidden">
      <h1>Hardlist FAQ</h1>
      <div className="faqBook">
        <Book title="FAQ" />
      </div>
    </div>
  );
};

export default FAQ;

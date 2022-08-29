import React, { useState } from "react";
import "./Dictinary.css";

export default function Dictinary() {
  const [keyword, SetKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`My word inside input is ${keyword}`);
  }

  function showKeywords(event) {
    SetKeyword(event.target.value);
  }
  return (
    <div className="Dictinary">
      <form onSubmit={search}>
        <input
          type="search"
          class="form-control search"
          placeholder="Type to search..."
          onChange={showKeywords}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import "./Dictinary.css";

export default function Dictinary() {
  const [keyword, SetKeyword] = useState("");

  function handalResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handalResponse);
  }

  function showKeywords(event) {
    SetKeyword(event.target.value);
  }
  return (
    <div className="Dictinary">
      <form onSubmit={search}>
        <input
          type="search"
          className="form-control search"
          placeholder="Type to search..."
          onChange={showKeywords}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictinary.css";

export default function Dictinary(props) {
  const [keyword, SetKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handalResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handalResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function showKeywords(event) {
    SetKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictinary">
        <section>
          <p className="ask"> What word do you want to look up?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control search"
              placeholder="Type to search..."
              onChange={showKeywords}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, plant...
          </div>
        </section>
        <Results results={result} />
      </div>
    );
  } else {
    load();
    return null;
  }
}

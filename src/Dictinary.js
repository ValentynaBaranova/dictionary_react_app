import React, { useState } from "react";
import Results from "./Results";
import Pexels from "./Pexels";
import axios from "axios";
import "./Dictinary.css";

export default function Dictinary(props) {
  const [keyword, SetKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handalResponse(response) {
    setResult(response.data[0]);
  }

  function handalResponsePexels(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handalResponse);

    const apiPexelsKey =
      "563492ad6f91700001000001d516f9fd43464572965473e04ceda33e";
    let apiPexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(apiPexelsUrl, {
        headers: { Authorization: `Bearer ${apiPexelsKey}` },
      })
      .then(handalResponsePexels);
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
        <Pexels photos={photos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}

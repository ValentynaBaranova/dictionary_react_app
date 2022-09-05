import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <ul className="Synonyms">
        <h2>Synonyms:</h2>{" "}
        {props.synonyms.map(function (syn, index) {
          return <li key={index}>{syn}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}

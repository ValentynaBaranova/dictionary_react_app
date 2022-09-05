import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <ul className="Synonyms">
        <strong>Synonyms:</strong>{" "}
        {props.synonyms.map(function (syn, index) {
          return <li key={index}>{syn}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}

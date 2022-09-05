import React from "react";
import "./Dictinary.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <span className="phone_tik">{props.phonetic.text}</span>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <i class="fa-solid fa-volume-high"></i>
        </a>
      </div>
    );
  } else {
    return <span className="phone_tik">{props.phonetic.text}</span>;
  }
}

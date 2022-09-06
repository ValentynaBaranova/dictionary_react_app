import React from "react";

export default function Pexels(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Pexels">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 block" key={index}>
                <a href={photo.src.original}>
                  <img
                    src={photo.src.tiny}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

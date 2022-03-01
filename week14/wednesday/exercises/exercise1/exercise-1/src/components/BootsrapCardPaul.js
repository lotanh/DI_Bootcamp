import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BootsrapCardPaul = (props) => {
   props = {
    title : "McCartney",

    imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",

    buttonLabel : "Go to Wikipedia",

    buttonUrl : "https://en.wikipedia.org/wiki/Paul_McCartney",

    description : "Sir James Paul McCartney CH MBE (born 18 June 1942)"
}
    return (
      <>
        <div className="card m-6 text-center" style={{ width: "25rem" }}>
          <img
            className="card-img-top"
            src={props.imageUrl}
            alt="Card"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.description}
            </p>
            <a
              href={props.buttonUrl}
              className="btn btn-primary"
            >
              {props.buttonLabel}
            </a>
          </div>
        </div>
      </>
    );
  }


export default BootsrapCardPaul;

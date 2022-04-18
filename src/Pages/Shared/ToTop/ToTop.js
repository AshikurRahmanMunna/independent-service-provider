import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ToTop.css";
import React, { useEffect, useState } from "react";

const ToTop = () => {
  const [show, setShow] = useState("d-none");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShow('d-block');
      }
      else {
        setShow('d-none');
      }
    });
  });
  return (
    <div className={show}>
      <div className="to-top">
        <a href="#">
          <FontAwesomeIcon
            className="fs-1"
            icon={faAnglesUp}
            beatFade
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default ToTop;

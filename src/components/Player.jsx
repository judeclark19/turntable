import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player() {
  return (
    <div className="player">
      <div className="time-control">
        <p>current time</p>
        <input type="range" />
        <p>duration</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-left" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="play" icon={faPlay} size="2x" />
        <FontAwesomeIcon className="skip-right" icon={faAngleRight} size="2x" />
      </div>
    </div>
  );
}

export default Player;

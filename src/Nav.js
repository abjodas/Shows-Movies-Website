import React, { useState, useEffect } from "react";
import "./Nav.css";
import { netflix_logo, avatar_logo } from "./ImageUrl";

function Nav() {
  //This state indicates whether the background color of the
  //navbar is black or not
  const [show, handleShow] = useState(false);

  //So we are creating a function whoch will check whether the user has
  //scrolled more than 100 in the Y direction, i.e, vertically
  //If so, the show state will be set to true
  //Else it will be set to false

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  //We will add an event listener in useEffect which will run everytime the
  //component gets mounted

  useEffect(() => {
    //Everytime a scroll event is triggered, the function transitionNavBar will also
    //be triggered
    window.addEventListener("scroll", transitionNavBar);

    //We also need to remove the event listener in order to clean up. This will be done by the
    //function below

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && `nav_black`}`}>
      <div className="nav_contents">
        <img className="nav_logo" src={netflix_logo} alt="" />
        <img className="nav_avatar" src={avatar_logo} alt="" />
      </div>
    </div>
  );
}

export default Nav;

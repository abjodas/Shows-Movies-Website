import React, { useEffect } from "react";
import "./Banner.css";
import { banner } from "./ImageUrl";
import axios from "axios";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }

  useEffect(() => {
    axios({
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      method: "get",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2NhY2Q1YTk4YTMxYTEwNTVkMjhiZjkyYzhhYzFkZCIsInN1YiI6IjYyODNmYWU0ZmQxNDBiMzAwZWM1NTgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4iFNm5t58AMQ2dsoeuQ7eeJjSRIgtb4elXtT-z7Bx5w",
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            "This is a test description to demonstrate multiple lines of description",
            60
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;

import React, { useEffect } from "react";
import axios from "axios";
import qs from "qs";
const config = {
  headers: {
    Authorization: `Bearer BQD1s94KTmp-vqSBxOY-hricKPfqQdpSoiOmOyU1KV8jY8zt6f3maDs_1MTMyyiTwiMby16OwPeZxr4S9ZwkR4vG80Ao8ffEolUf0Qnl9brhl7oCkhw`,
  },
};

function Spotify() {
  const token_url = "https://accounts.spotify.com/api/token";
  const clientId = "98565778e8ff4598a267ac7625519753";
  const clientSecret = "51d31b0cb30246b198be97cb46277992";
  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: "client_credentials",
  };
  useEffect(() => {
    async function fetchData() {
      /*       axios
        .post(
          "https://accounts.spotify.com/api/token",
          qs.stringify(data),
          headers
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err)); */
      axios
        .get(
          "https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK",
          config
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);
  return <div>Spotify</div>;
}

export default Spotify;

import React from "react";
import { Navbar, Main, Row } from "../components";
import request from "../Request";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Row rowID="1" title="Now Playing Movies" fetchURL={request.nowPlaying} />
      <Row
        rowID="1"
        title="Upcoming Movies"
        fetchURL={request.upComingMovies}
      />
      <Row
        rowID="2"
        title="Trending Movies"
        fetchURL={request.trendingMovies}
      />
      <Row
        rowID="3"
        title="Top Rated Movies"
        fetchURL={request.topRatedMovies}
      />
      <Row rowID="4" title="Action Movies" fetchURL={request.actionMovies} />
      <Row rowID="5" title="Romance Movies" fetchURL={request.romanceMovies} />
      <Row
        rowID="6"
        title="Animation Movies"
        fetchURL={request.animationMovies}
      />
    </div>
  );
};

export default Home;

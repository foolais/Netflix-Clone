import React from "react";
import { Navbar, Main, Row, Footer } from "../components";
import request from "../Request";

const Home = () => {
  return (
    <div>
      <Navbar location="Home" />
      <Main />
      <Row rowID="1" title="Now Playing Movies" fetchURL={request.nowPlaying} />
      <Row
        rowID="2"
        title="Upcoming Movies"
        fetchURL={request.upComingMovies}
      />
      <Row
        rowID="3"
        title="Trending Movies"
        fetchURL={request.trendingMovies}
      />
      <Row
        rowID="4"
        title="Top Rated Movies"
        fetchURL={request.topRatedMovies}
      />
      <Row rowID="5" title="Action Movies" fetchURL={request.actionMovies} />
      <Row rowID="6" title="Romance Movies" fetchURL={request.romanceMovies} />
      <Row
        rowID="7"
        title="Animation Movies"
        fetchURL={request.animationMovies}
      />
      <div className="border-t-8 border-t-[#222]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

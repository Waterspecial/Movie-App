import React from "react";
import { Main } from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestUpcoming} />
      <Row title="Trending" fetchURL={requests.requestUpcoming} />
      <Row title="Top rated" fetchURL={requests.requestUpcoming} />
      <Row title="Up coming" fetchURL={requests.requestUpcoming} />
    </div>
  );
};

export default Home;

import React from "react";
// import Button from "react-bootstrap/Button";
// or less ideally
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import axios from "axios";
const FetchNews = () => {
  let [newsData, setNewsData] = useState([]);

  let fetchNews = () => {
    console.log("Connected to API");
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=f9165327abba4710b522e5f08640d2ae"
      )
      .then((response) => {
        setNewsData(response.data.articles);
        console.log(response);
        console.log("Set data to hook");
      });
  };

  return (
    <>
      {/* fetch data */}
      <div className="container my-4">
        <div className="row">
          <div className="col-4 mx-0">
            <Button onClick={fetchNews}> Fetch News</Button>
          </div>
        </div>
      </div>
      {/* layout data */}
      <div className="container">
        <div className="row">
          {newsData.map((values) => {
            return (
              <div className="col-4 ">
                <Card style={{ width: "20rem" }} className="my-2">
                  <Card.Img variant="top" src={values.urlToImage} />
                  <Card.Body>
                    <Card.Title>Headline : {values.title}</Card.Title>
                    <Card.Text>{values.description}</Card.Text>
                    <Button variant="primary">
                      <a
                        href={values.url}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Read More..
                      </a>
                      .
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchNews;

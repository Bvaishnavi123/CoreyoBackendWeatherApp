const express = require("express");
const axios = require("axios");
const newsr = express.Router();

newsr.get("/news", async (req, res) => {
  try {
    var url =
      `http://newsapi.org/v2/top-headlines?` +
      "country=in&" +
      "apiKey=b4a1786347b74fb0bb401447a73c5cc7";

    const news_get = await axios.get(url);
  
    let news = [];
    for (let i = 0; i < news_get.data.articles.length; i++) {
      let obj = {
        headline: news_get.data.articles[i].title,
        link: news_get.data.articles[i].url,
      };
      news.push(obj);
    }

    res.send({
      Count: news_get.data.totalResults,
      data: news,
    });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
});

newsr.post("/news", async (req, res) => {
  const search_news = req.body.search;

  try {
    var url = `http://newsapi.org/v2/everything?q=${search_news}&apiKey=b4a1786347b74fb0bb401447a73c5cc7`;

    const news_get = await axios.get(url);
    
    let news = [];
    for (let i = 0; i < news_get.data.articles.length; i++) {
      let obj = {
        headline: news_get.data.articles[i].title,
        link: news_get.data.articles[i].url,
      };
      news.push(obj);
    }
    res.send({
      Count: news_get.data.totalResults,
      data: news,
    });
  } catch (error) {
    if (error.response) {
      console.log(error);
    }
  }
});

module.exports = newsr;

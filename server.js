const express = require("express");
const http = require("http");
const app = express();
const YOUTUBE_META_URL = "http://www.youtube.com/oembed?format=json&url=";

app.get("/api/youtubeMeta", async (req, res) => {
  http.get(`${YOUTUBE_META_URL}${req.query.url}`, youtubeMetaRes => {
    youtubeMetaRes.on("data", buffer => {
      let data = Buffer.from(buffer);
      res.json(data.toString());
    });
  });
});

app.listen(3001);

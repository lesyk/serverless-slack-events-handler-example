const VERIFICATION_TOKEN = "";

const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("port", 8080);
app.listen(app.get("port"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

function verify(data, callback) {
  if (data.token === VERIFICATION_TOKEN) {
    callback(data.challenge);
  } else {
    callback("verification failed");
  }
}

function check_event(body, callback) {
  // Catch events here
  if (body.event.type === "member_joined_channel") {
    console.log("member_joined_channel");
    // DO actions when user joined.
  }

  callback(null);
}

app.post("/", (req, res) => {
  switch (req.body.type) {
    case "url_verification":
      verify(req.body, (challange) => {
        if (challange) {
          res.json({
            "challange": `${challange}`
          });
          res.send();
        }
      });
      break;
    case "event_callback":
      check_event(req.body, () => {
        res.send();
      });
      break;
    default:
      res.send();
  }
});

module.exports.handler = serverless(app);
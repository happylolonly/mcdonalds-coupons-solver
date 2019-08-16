import express from "express";

const app = express();

import { process } from "./puppeteer";
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("../static"));

app.post("/coupon", async (req, res) => {
  const { coupon } = req.body;

  console.log(coupon);

  try {
    const name = await process(coupon);

    res.send(name).status(200);
  } catch (error) {
    console.log(error);
    res.send(error).status(410);
  }
});

app.listen(3000, () => {
  console.log("Server ready on port:", 3000);
});

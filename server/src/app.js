import express from "express";

const app = express();

import { processCoupon } from "./puppeteer";
import bodyParser from "body-parser";

import cors from "cors";

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("build"));
app.use(express.static("static"));

app.post("/coupon", async (req, res) => {
  const { coupon } = req.body;

  console.log(coupon);

  try {
    const name = await processCoupon(coupon);

    res.send(name).status(200);
  } catch (error) {
    console.log(error);
    res.send(error).status(410);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server ready on port:", PORT);
});

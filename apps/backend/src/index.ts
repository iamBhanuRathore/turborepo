import express from "express";
import { theString, myType } from "@repo/common/index"; // Ensure @repo/common/zod is correctly resolved
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser());
app.get("/", (req, res) => {
  res.json({
    message: "Okay boy this is good --" + theString,
  });
});
app.post("/", async (req, res) => {
  const body = await req.body;
  console.log(body);
  const isOk = myType.safeParse(body);
  if (isOk.error?.issues) {
    return res.json({
      message: "Wrong ",
      isOk: isOk.error?.issues,
    });
  }
  res.json({
    message: "Okay boy this is good --" + theString,
    isOk,
  });
});
app.listen(5000, () => {
  console.log("Server is Running on Port: 5000");
});

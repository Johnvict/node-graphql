const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost:27017/qraphql-ninja");
mongoose.connection.once("open", () => console.log("Connected to database"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("app listening at 4000"));

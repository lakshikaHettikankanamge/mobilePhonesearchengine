const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

//BodyParser MiddleWare
app.use(express.json());

//DBconfig
const db = config.get("mongoURI");

//connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Mongodb connected..."))
  .catch(err => console.log(err));

//use routes
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/stores", require("./routes/api/stores"));
app.use("/api/comments", require("./routes/api/comments"));
app.use("/api/reviews", require("./routes/api/reviews"));
app.use("api/accessories", require("./routes/api/accessories"));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

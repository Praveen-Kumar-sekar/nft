const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));

}

module.exports = app;

const nftsRouter = require("./routes/nftsRoute");
const usersRouter = require("./routes/usersRoute");

app.use(express.json()); // it'll show undefined if we didn't use it during post.
// serving template
app.use(express.static(`${__dirname}/nft-data/img`));
// Custom Middlewere
app.use((req, res, next) => {
    console.log("hey i'm middelewere");
    next();
})

// to dispaly timestamp
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})



app.use("/api/v1/nfts", nftsRouter)
app.use("/api/v1/users", usersRouter)
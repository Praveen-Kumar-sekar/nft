const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
/* console.log(app.get("env"));
 */
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
}).then((con) => {
    /*     console.log(con.connection);
     */
    console.log("DB Connection Successfull");
})



/* console.log(process.env);
 */

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on ${port}..`);
})
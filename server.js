const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
const router = express.Router();

mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost:27017/workout" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
const cookieSession = require('cookie-session');
const cookieParser = require("cookie-parser");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config')

app.use(cookieSession({
    name: 'session',
    keys: ['twitter'],
    maxAge: 24 * 60 * 60 * 100
}))
app.use(cookieParser())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const UserRoutes = require("./routes/user.routes");
UserRoutes(app);
require("./routes/user.routes")(app);
require('./routes/post.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000");
})
import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Route
app.get('/', (req, res) => res.send('Hello From Homepage.'));
// Prefix
app.use('/users', usersRoutes);

app.listen(port, () => console.log(`PORT USE ${port}`));
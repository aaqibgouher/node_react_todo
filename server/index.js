const express = require("express");
require("./database/config");
const router = require("./routes");
const TodoModel = require("./model/TodoModel");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/todo", router);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));

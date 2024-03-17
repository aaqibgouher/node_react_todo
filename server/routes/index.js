const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoController");

/*
    GET: /api/todo
    POST: /api/todo
    UPDATE: /api/todo/todoId
    DELETE: /api/todo/todoId
*/

// get all todos
router.get("/", todoController.getTodos);

// add todo
router.post("/", todoController.addTodo);

// delete todo by id
router.delete("/:todoId", todoController.deleteTodo);

// update todo by id
router.patch("/:todoId", todoController.udpateTodo);

module.exports = router;

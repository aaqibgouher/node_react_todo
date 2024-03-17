const todoService = require("../service/todoService");

const getTodos = async (req, res) => {
  try {
    const data = await todoService.getTodos();

    res.json({ status: 200, message: "Successfully get todos", data });
  } catch (error) {
    console.log(error, "from get todos");
  }
};

const addTodo = async (req, res) => {
  try {
    const { title, description, isCompleted } = req.body;
    const data = await todoService.addTodo({ title, description, isCompleted });

    res.json({ status: 200, message: "Successfully added a todo", data });
  } catch (error) {
    console.log(error, "from add todo");
    res.json({ status: 400, error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const data = await todoService.deleteTodo({ todoId });

    res.json({ status: 200, message: "Successfully deleted a todo", data });
  } catch (error) {
    console.log(error, "from delete todo");
    res.json({ status: 400, error });
  }
};

const udpateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { title, description, isCompleted } = req.body;
    const data = await todoService.updateTodo({
      todoId,
      title,
      description,
      isCompleted,
    });

    res.json({ status: 200, message: "Successfully updated a todo", data });
  } catch (error) {
    console.log(error, "from updated todo");
    res.json({ status: 400, error });
  }
};

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  udpateTodo,
};

const TodoModel = require("../model/TodoModel");

const getTodos = async (payload) => {
  return await TodoModel.find();
};

const addTodo = async (payload) => {
  console.log(payload, "from payload");
  // 1. Validation
  // 2. add data in the db

  if (!payload || !payload.title) throw "Title is required";
  const { title, description, isCompleted } = payload;

  const todoObj = new TodoModel({
    title,
    description,
    isCompleted,
  });

  return await todoObj.save();
};

const deleteTodo = async (payload) => {
  console.log(payload, "from service");
  // 1. validations
  // 2. check if todo exist by id

  if (!payload || !payload.todoId) throw "Id is required";

  const { todoId } = payload;

  const todo = await getTodoById(todoId);

  if (!todo) throw "Todo not found";

  return await TodoModel.deleteOne({ _id: todoId });
};

const updateTodo = async (payload) => {
  if (!payload || !payload.todoId) throw "Id is required";
  if (!payload || !payload.title) throw "Title is required";

  const { todoId, title, description, isCompleted } = payload;

  const todo = await getTodoById(todoId);

  if (!todo) throw "Todo not found";

  todo.title = title || todo.title;
  todo.description = description || todo.description;
  todo.isCompleted = isCompleted || todo.isCompleted;

  return await todo.save();
};

const getTodoById = async (id) => {
  return await TodoModel.findById({ _id: id });
};

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  getTodoById,
  updateTodo,
};

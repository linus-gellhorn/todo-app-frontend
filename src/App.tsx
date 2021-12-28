import "./App.css";
import axios from "axios";
import { APIBaseURL } from "./utils/APIBaseURL";
import InputTodo from "./components/InputTodo";
import ListTodos, { Todo } from "./components/ListTodos";
import { useState, useEffect } from "react";

function App(): JSX.Element {
  const [todoData, setTodoData] = useState<Todo[]>([]);
  const [description, setDescription] = useState("");

  const getTodos = async () => {
    await axios
      .get(`${APIBaseURL}todos`)
      .then((response) => {
        setTodoData(response.data.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await axios
      .post(`${APIBaseURL}todos`, { description: description })
      .then(function (response) {
        setDescription("");
      })
      .catch(function (error) {
        console.log(error);
      });
    getTodos();
  };

  return (
    <div>
      <h1 className="text-center mt-3">To-Do App</h1>
      <div className="container">
        <InputTodo
          handleSubmit={handleSubmit}
          description={description}
          setDescription={setDescription}
        />
        <ListTodos todoData={todoData} getTodos={getTodos} />
      </div>
    </div>
  );
}

export default App;

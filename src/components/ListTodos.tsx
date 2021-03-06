import IndividualTodo from "./IndividualTodo";

export interface Todo {
  id: number;
  description: string;
  creation_date: string;
  completed: boolean;
}

interface ListTodosProps {
  todoData: Todo[];
  getTodos: () => Promise<void>;
}

export default function ListTodos(props: ListTodosProps): JSX.Element {
  return (
    <>
      <h2 className="text-center mt-5">To-Do List</h2>
      <div>
        <table className="table text-center mt-5">
          <thead>
            <tr>
              <th>Completion Status</th>
              <th>Description</th>
              <th>Creation Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.todoData.map((item) => (
              <IndividualTodo
                key={item.id}
                description={item.description}
                creation_date={item.creation_date}
                completed={item.completed}
                id={item.id}
                getTodos={props.getTodos}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

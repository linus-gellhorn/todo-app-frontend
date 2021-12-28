import axios from "axios";
import { APIBaseURL } from "../utils/APIBaseURL";
import EditTodo from "./EditTodo";

interface IndividualTodoProps {
  id: number;
  description: string;
  creation_date: string;
  completed: boolean;
  getTodos: () => Promise<void>;
}

function IndividualTodo(props: IndividualTodoProps): JSX.Element {
  const handleDelete = async () => {
    await axios.delete(`${APIBaseURL}todos/${props.id}`);
    props.getTodos();
  };

  const handleComplete = async () => {
    await axios.patch(`${APIBaseURL}todos/${props.id}`, {
      completed: !props.completed,
    });
    props.getTodos();
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="checkbox"
            onChange={handleComplete}
            checked={props.completed}
          />
        </td>

        {props.completed ? (
          <td className="completed">{props.description}</td>
        ) : (
          <td>{props.description}</td>
        )}

        <td>
          {props.creation_date
            .replace("T", ", ")
            .slice(0, props.creation_date.length - 7)}
        </td>
        <td>
          <EditTodo
            description={props.description}
            id={props.id}
            getTodos={props.getTodos}
          />
        </td>
        <td>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default IndividualTodo;

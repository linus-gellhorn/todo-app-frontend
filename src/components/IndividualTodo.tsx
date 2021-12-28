import axios from "axios";
import { APIBaseURL } from "../utils/APIBaseURL";
import EditTodo from "./EditTodo";

interface IndividualTodoProps {
  id: number;
  description: string;
  getTodos: () => Promise<void>;
}

function IndividualTodo(props: IndividualTodoProps): JSX.Element {
  const handleDelete = async () => {
    await axios.delete(`${APIBaseURL}todos/${props.id}`);
    props.getTodos();
  };

  return (
    <>
      <tr>
        <td>{props.description}</td>
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

import { useState } from "react";
import axios from "axios";
import { APIBaseURL } from "../utils/APIBaseURL";

interface EditTodoProps {
  id: number;
  description: string;
  getTodos: () => Promise<void>;
}

export default function EditTodo(props: EditTodoProps): JSX.Element {
  const [edit, setEdit] = useState(props.description);

  const handleEdit = async () => {
    await axios.patch(`${APIBaseURL}todos/${props.id}`, { description: edit });
    props.getTodos();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${props.id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${props.id}`}
        onClick={() => setEdit(props.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit To-Do</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setEdit(props.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                className="form-control"
                value={edit}
                onChange={(event) => setEdit(event.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={handleEdit}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setEdit(props.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

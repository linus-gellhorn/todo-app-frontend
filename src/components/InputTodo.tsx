interface InputTodoProps {
  handleSubmit: (event: React.FormEvent) => Promise<void>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputTodo(props: InputTodoProps): JSX.Element {
  return (
    <>
      <h2 className="text-center mt-5">Input Todo</h2>
      <form className="d-flex mt-5" onSubmit={props.handleSubmit}>
        <input
          className="form-control"
          placeholder="Enter a to-do..."
          value={props.description}
          onChange={(event) => {
            props.setDescription(event.target.value);
          }}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
}

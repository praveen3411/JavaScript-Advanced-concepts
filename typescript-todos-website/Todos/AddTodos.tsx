import { ChangeEvent, FormEvent, useState } from "react";
type parm = {
  onAdd: Function;
};
export default function AddTodos({ onAdd }: parm) {
  const [take, setTake] = useState<string>("");
  let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTake(e.target.value);
  };
  let handleSumit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(take);
  };
  return (
    <div>
      <form onSubmit={handleSumit}>
        <input
          type={"text"}
          value={take}
          placeholder={"enter task"}
          onChange={handleChange}
        />
        <input type={"submit"} value={"Submit"} />
      </form>
    </div>
  );
}

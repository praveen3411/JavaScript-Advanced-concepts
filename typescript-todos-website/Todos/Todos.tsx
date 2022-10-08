import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import AddTodos from "./AddTodos";
import AddItems from "./Items";
type posttodos = {
  title: string;
  status: boolean;
};
type todoProps = {
  id: number;
  title: string;
  status: boolean;
};
let newfunction = async () => {
  let response: AxiosResponse<Array<todoProps>> = await axios.get(
    `http://localhost:5000/todos`
  );
  return response.data;
};
let postingtodos = async (parms: posttodos) => {
  let response: AxiosResponse<todoProps> = await axios.post(
    `http://localhost:5000/todos`,
    parms
  );
  return response.data;
};
export default function Todos() {
  const [todo, setTodo] = useState<Array<todoProps>>([]);
  let newtodos = (title: string) => {
    if (title) {
      postingtodos({ title, status: false }).then((res) => {
        setTodo([...todo, res]);
      });
    }
  };
  useEffect(() => {
    newfunction().then((res) => {
      setTodo(res);
    });
  }, []);
  return (
    <div>
      <div>
        <AddTodos onAdd={newtodos} />
      </div>
      {todo.map((item) => (
        <AddItems key={item.id} {...item} />
      ))}
    </div>
  );
}

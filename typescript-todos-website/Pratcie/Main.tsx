import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import MainAdd from "./MainAdd";
import MainTodos from "./MainItems";
type firstProps = {
  id: number;
  title: string;
  status: boolean;
};
type secondProps = {
  title: string;
  status: boolean;
};
let firstfunction = async () => {
  let response: AxiosResponse<Array<firstProps>> = await axios.get(
    `http://localhost:5000/todos`
  );
  return response.data;
};
let secondfunction = async (propshere: secondProps) => {
  let response: AxiosResponse<firstProps> = await axios.post(
    `http://localhost:5000/todos`,
    propshere
  );
  return response.data;
};
export default function Main() {
  const [todos, setTodos] = useState<Array<firstProps>>([]);
  let newTodos = (title: string) => {
    if (title) {
      secondfunction({ title, status: false }).then((res) => {
        setTodos([...todos, res]);
      });
    }
  };
  useEffect(() => {
    firstfunction().then((res) => {
      setTodos(res);
    });
  }, []);
  return (
    <div>
      <div>
        <MainAdd onAdding={newTodos} />
      </div>
      {todos.map((item) => (
        <div key={item.id}>
          <MainTodos key={item.id} {...item} />
        </div>
      ))}
    </div>
  );
}

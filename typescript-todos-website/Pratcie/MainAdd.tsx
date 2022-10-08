import { ChangeEvent, FormEvent, useState } from "react";

type fourthProps = {
  onAdding: Function;
};
export default function MainAdd({ onAdding }: fourthProps) {
  const [setting, setSetting] = useState<string>("");
  let handlechange=(e:ChangeEvent<HTMLInputElement>)=>{
    setSetting(e.target.value);
  }
  let handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdding(setting);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={setting}
          placeholder="Enter Your task Here"
          onChange={handlechange}
        />
      </form>
    </div>
  );
}

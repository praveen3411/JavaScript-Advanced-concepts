type thirdProps = {
  id?: number;
  title: string;
  status: boolean;
};
export default function MainTodos({ id, title, status }: thirdProps) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h2>{id}</h2>
      <h2>{title}</h2>
      <h2>{status}</h2>
    </div>
  );
}

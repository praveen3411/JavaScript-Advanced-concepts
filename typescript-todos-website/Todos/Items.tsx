type itemprops = {
  id?: number;
  title: string;
  status: boolean;
};
export default function AddItems({ title, status, id }: itemprops) {
  console.log(title, status, id);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h2>{id}</h2>
      <h2>{title}</h2>
      <h2>{status ? "DONE" : "NOT-DONE"}</h2>
    </div>
  );
}

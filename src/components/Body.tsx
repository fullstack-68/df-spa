import { type FC } from "react";
import Clock from "./Clock";
const Body: FC = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>React Query</h1>
      <Clock withRefetch={true} />
      <Clock withRefetch={true} />
      <Clock withRefetch={true} />
      <Clock withRefetch={true} />
      <Clock withRefetch={true} />
      <Clock withRefetch={true} />
    </main>
  );
};

export default Body;

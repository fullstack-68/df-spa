import { type FC } from "react";
import Clock from "./Clock";
const Body: FC = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Websocket (+ Jotai)</h1>
      <Clock bodyComponent={true} initialFetch={true} />
      <Clock bodyComponent={true} />
      <Clock bodyComponent={true} />
      <Clock bodyComponent={true} />
      <Clock bodyComponent={true} />
      <Clock bodyComponent={true} />
    </main>
  );
};

export default Body;

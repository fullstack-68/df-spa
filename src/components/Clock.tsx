import { type FC, useEffect, useState } from "react";
import styles from "../styles/style.module.css";
import { socket } from "../socket";
import { atom, useAtom } from "jotai";

const clockAtom = atom("");

interface Props {
  bodyComponent?: boolean;
  initialFetch?: boolean;
}
const Clock: FC<Props> = ({ bodyComponent, initialFetch }) => {
  const [_, setIsConnected] = useState(socket.connected);
  const [clock, setClock] = useAtom(clockAtom);

  initialFetch &&
    useEffect(() => {
      function onConnect() {
        setIsConnected(true);
      }

      function onDisconnect() {
        setIsConnected(false);
      }

      function onClockEvent(value: { clock: string }) {
        setClock(value.clock);
      }

      socket.on("connect", onConnect);
      socket.on("disconnect", onDisconnect);
      socket.on("clock", onClockEvent);

      return () => {
        socket.off("connect", onConnect);
        socket.off("disconnect", onDisconnect);
        socket.off("clock", onClockEvent);
      };
    }, []);

  if (!bodyComponent) {
    return <kbd>{clock}</kbd>;
  } else {
    return (
      <article>
        <div className={styles.clockWrapper}>
          <span className={styles.clockText}>{clock}</span>
        </div>
      </article>
    );
  }
};

export default Clock;

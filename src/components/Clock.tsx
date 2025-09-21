import { type FC, useEffect } from "react";
import styles from "../styles/style.module.css";
import { atom, useAtom } from "jotai";

interface Props {
  bodyComponent?: boolean;
  initialFetch?: boolean;
}

const clockAtom = atom("");

const Clock: FC<Props> = ({ bodyComponent, initialFetch }) => {
  const [clock, setClock] = useAtom(clockAtom);

  useEffect(() => {
    function initSSE() {
      const events = new EventSource("/api/sse/clock");
      events.onmessage = (e: any) => {
        setClock(e?.data ?? "");
      };
    }
    initialFetch && initSSE();
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

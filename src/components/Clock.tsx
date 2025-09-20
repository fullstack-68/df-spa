import { type FC, useEffect } from "react";
import axios from "axios";
import styles from "../styles/style.module.css";
import { useAtom, atom } from "jotai";

const clockAtom = atom("");

interface Props {
  withRefetch?: Boolean;
  initialFetch?: Boolean;
}

const Clock: FC<Props> = ({ withRefetch, initialFetch }) => {
  const [clock, setClock] = useAtom(clockAtom);
  const refetch = () => {
    axios
      .request<{ data: string }>({
        method: "GET",
        url: "/api/clock",
      })
      .then((res) => setClock(res.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    initialFetch && refetch();
  }, []);

  if (!withRefetch) {
    return <kbd>{clock}</kbd>;
  } else {
    return (
      <article>
        <div className={styles.clockWrapper}>
          <span className={styles.clockText}>{clock}</span>
          <button onClick={() => refetch()}>Refetch</button>
        </div>
      </article>
    );
  }
};

export default Clock;

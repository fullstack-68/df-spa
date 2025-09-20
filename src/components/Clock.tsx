import { type FC, useEffect } from "react";
import axios from "axios";
import styles from "../styles/style.module.css";
import useGlobalStore from "../stores/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

interface Props {
  withRefetch?: Boolean;
  initialFetch?: Boolean;
}

const Clock: FC<Props> = ({ withRefetch, initialFetch }) => {
  const [clock, setClock] = useGlobalStore(
    useShallow((state) => [state.clock, state.setClock])
  );

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
    if (initialFetch) refetch();
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

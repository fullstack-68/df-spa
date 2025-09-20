import { type FC } from "react";
import styles from "../styles/style.module.css";
import useClock from "../hooks/useClock";

interface Props {
  withRefetch?: Boolean;
}
const Clock: FC<Props> = ({ withRefetch }) => {
  const { clock, refetch } = useClock();

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

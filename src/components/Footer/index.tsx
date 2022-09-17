import Image from 'next/image';

import styles from './styles.module.scss';

// import fieldIcon from "./fiedlIcon.svg"

export function Footer(){
  return(
    <footer className={styles.wrapper}>
      <ul className={styles.container}>
        <li className={styles.navItem}>
          <img src="fieldIcon.svg" alt="Soccer Field" />
          <p>Matches</p>
        </li>
        <li className={styles.navItem}>
          <img src="trophyIcon.svg" alt="Trophy" />
          <p>Season</p>
        </li>
        <li className={styles.navItem}>
          <img src="statsIcon.svg" alt="Chart" />
          <p>Stats</p>
        </li>
        <li className={styles.navItem}>
          <img src="playersIcon.svg" alt="Players illustration" />
          <p>Players</p>
        </li>
      </ul>
    </footer>
  );
}
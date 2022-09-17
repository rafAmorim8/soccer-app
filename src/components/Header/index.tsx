import Image from 'next/image';
import styles from './styles.module.scss';


export function Header(){
  return(
    <header className={styles.container}>
      <img src="/BrazilFC.png" alt="escudo Brazil FC" />
      <h1>Brazil FC</h1>
    </header>
  )
}
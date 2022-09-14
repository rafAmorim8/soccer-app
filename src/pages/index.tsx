import styles from '../styles/home.module.scss';

import { Footer } from '../components/Footer';


export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Brazil FC</h1>
      <Footer />
    </div>
  )
}

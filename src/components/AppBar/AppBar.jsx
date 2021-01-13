import Navigation from '../Navigation/Navigation';
import styles from './Appbar.module.css';

export default function Appbar() {
  return (
    <header className={styles.Searchbar}>
      <Navigation />
    </header>
  );
}

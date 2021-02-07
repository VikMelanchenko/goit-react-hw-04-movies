import Navigation from '../Navigation/Navigation';
import ThemeSwither from '../ThemeSwither/ThemeSwither';
import styles from '../../css/styles.module.css';

export default function Appbar() {
  return (
    <header className={styles.Searchbar}>
      <Navigation />
      <ThemeSwither />
    </header>
  );
}

import Navigation from '../Navigation/Navigation';
import ThemeSwither from '../ThemeSwither/ThemeSwither';
import styles from './app.module.css';

export default function Appbar() {
  return (
    <header className={styles.Searchbar}>
      <Navigation />
      <div>
        <ThemeSwither />
      </div>
    </header>
  );
}

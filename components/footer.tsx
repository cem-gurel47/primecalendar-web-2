import cn from 'classnames';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={cn(styles.footer)}>
      <div className={styles['footer-legal']}>
        <div className={styles['footer-center-group']}></div>
      </div>
    </footer>
  );
}

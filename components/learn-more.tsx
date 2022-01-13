import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './contact.module.css';

export default function LearnMore() {
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.contact)}>
      If you have an account,{' '}
      <a href="/signin" className={styles['contact-email']}>
        Login
      </a>
      .
    </div>
  );
}

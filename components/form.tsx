import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './form.module.css';
import Link from 'next/link';

type Props = {
  sharePage?: boolean;
};

export default function Form({ sharePage }: Props) {
  const formState = 'default';

  return (
    <form
      className={cn(styles.form, {
        [styles['share-page']]: sharePage,
        [styleUtils.appear]: true,
        [styleUtils['appear-fifth']]: !sharePage,
        [styleUtils['appear-third']]: sharePage
      })}
    >
      <div className={styles['form-row']}>
        <Link href="/signin">
          <button className={cn(styles.submit, styles.register, styles[formState])}>
            Register to get started
          </button>
        </Link>
      </div>
    </form>
  );
}

import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';
import { AUTHENTICATED_NAVIGATION, GUEST_NAVIGATION } from '@lib/constants';
import styles from './layout.module.css';
import Logo from './icons/icon-logo';
import MobileMenu from './mobile-menu';
import ViewSource from '@components/view-source';
import useAuth from '../lib/hooks/use-auth';

type Props = {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
};

export default function Layout({ children, className, hideNav, layoutStyles }: Props) {
  const router = useRouter();
  const activeRoute = router.asPath;
  const { isAuthenticated } = useAuth();

  return (
    <>
      <ViewSource />
      <div className={styles.background}>
        {!hideNav && (
          <header className={cn(styles.header)}>
            <div className={styles['header-logos']}>
              <MobileMenu key={router.asPath} />
              <Link href="/">
                {/* eslint-disable-next-line */}
                <div className={styles.logoContainer}>
                  <a className={styles.logo}>
                    <Logo />
                  </a>
                  <p>Prime Calendar</p>
                </div>
              </Link>
            </div>
            <div className={styles.tabs}>
              {isAuthenticated
                ? [
                    ...AUTHENTICATED_NAVIGATION.map(({ name, route }) => (
                      <Link key={name} href={route}>
                        <a
                          className={cn(styles.tab, {
                            [styles['tab-active']]: activeRoute.startsWith(route)
                          })}
                        >
                          {name}
                        </a>
                      </Link>
                    )),
                    <a className={cn(styles.tab)} onClick={() => console.log('logout')}>
                      LOGOUT
                    </a>
                  ]
                : GUEST_NAVIGATION.map(({ name, route }) => (
                    <Link key={name} href={route}>
                      <a
                        className={cn(styles.tab, {
                          [styles['tab-active']]: activeRoute.startsWith(route)
                        })}
                      >
                        {name}
                      </a>
                    </Link>
                  ))}
            </div>
          </header>
        )}
        <div className={styles.page}>
          <main className={styles.main} style={layoutStyles}>
            <SkipNavContent />
            <div className={cn(styles.full, className)}>{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

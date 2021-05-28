import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

import Button from '../Button';

import styles from './styles.module.scss';

const Nav = ({ }) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = React.useCallback(() => setShowMenu(prev => !prev), []);

  return (
    <nav className={styles.navbar} role='navigation' aria-label='main navigation'>
      <div className={styles['navbar-brand']}>
        <div onClick={() => router.push('/')}>
          <Image
            className={styles['navbar-logo']}
            src='/images/apphublogo.png'
            alt='Logo'
            width={160}
            height={45}
            priority
          />
        </div>

        <button
          className={[styles.burger, showMenu && styles['burger-active']].filter(Boolean).join(' ')}
          onClick={toggleMenu}
        ></button>
      </div>
      <div className={[styles['navbar-menu'], showMenu && styles['menu-active']].filter(Boolean).join(' ')}>
        <div className={styles['navbar-menu--item']}>
          <Link href="/apps">
            <a className={styles['navbar-menu--link']}>Apps</a>
          </Link>
        </div>
        <div className={styles['navbar-menu--item']}>
          <Link href="/blogs">
            <a className={styles['navbar-menu--link']}>Blogs</a>
          </Link>
        </div>
        <div className={styles['navbar-menu--item']}>
          <Link href="/about">
            <a className={styles['navbar-menu--link']}>About</a>
          </Link>
        </div>
        <div className={[styles['navbar-menu--item'], styles['btn-find-app']].join(' ')}>
          <div onClick={() => router.push('/apps')}>
            <Button>Find Your App</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
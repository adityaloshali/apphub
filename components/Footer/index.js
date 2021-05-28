import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

const Footer = (props) => (
  <div>
    <div className={styles.footer}>
      <div className="columns">
        <div className="column is-3">
          <Image
            alt="Logo"
            src="/images/apphublogomain.png"
            width={60}
            height={60}
          />
        </div>
        <div className="column is-3">
          <h4 className={styles.heading}>Company</h4>
          <ul className={styles.section}>
            <li className={styles['footer-link']}>About</li>
            <li className={styles['footer-link']}>Team</li>
            <li className={styles['footer-link']}>Join</li>
            <li className={styles['footer-link']}>Newsroom</li>
            <li className={styles['footer-link']}>Contact</li>
          </ul>
        </div>
        <div className="column is-3">
          <h4 className={styles.heading}>Solutions</h4>
          <ul className={styles.section}>
            {
              (props.categories || []).map((cat) => (
                <li key={cat.key} className={styles['footer-link']}>{cat.name}</li>
              ))
            }
          </ul>
        </div>
        <div className="column is-3">
          <h4 className={styles.heading}>Resources</h4>
          <ul className={styles.section}>
            <li className={styles['footer-link']}>Blogs</li>
            <li className={styles['footer-link']}>Support</li>
            <li className={styles['footer-link']}>Documentation</li>
            <li className={styles['footer-link']}>Subscribe</li>
          </ul>
        </div>
      </div>
    </div>
    <div className={styles['footer-below']}>
      Copyright © 2021 Appfire | All rights reserved.
    </div>
  </div>
);

export default Footer;
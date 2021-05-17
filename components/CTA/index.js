import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const CTA = (props) => (
  <div className={styles.cta}>
    <Link href={props.url}>
      <a className={styles['animated-arrow']}>
        <span className={[styles['the-arrow'], styles['the-arrow--left']].join(' ')}>
          <span className={styles['shaft']}></span>
        </span>
        <span className={styles['main']}>
          <span className={styles['text']}>
            {props.children || 'Details'}
          </span>
          <span className={[styles['the-arrow'], styles['the-arrow--right']].join(' ')}>
            <span className={styles['shaft']}></span>
          </span>
        </span>
      </a>
    </Link>
  </div>
);

export default CTA;
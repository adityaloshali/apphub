import React from 'react';
// import Link from "next/link";

import Image from "../Image";
import CTA from '../CTA';

import styles from './styles.module.scss';

const Button = ({ article }) => (
  <div className={styles.blogcard}>
    <div className={styles.image}>
      <Image image={article.image} style={{ width: '100%', height: '100%' }} />
    </div>
    <div className={styles.content}>
      <p id="title" className={styles.title}>
        {article.title}
      </p>
      <CTA url={`/blogs/${article.slug}`}>Read</CTA>
    </div>
  </div>
);

export default Button;
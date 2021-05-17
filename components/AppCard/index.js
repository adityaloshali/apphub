import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import CTA from '../CTA'

import styles from './styles.module.scss';

const AppCard = (props) => {
  const router = useRouter();

  return (
    <div className={[styles.card, props.detailed && styles.detailed].filter(Boolean).join(' ')}>
      <div className={styles.box} data-category={props.category}>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image src={props.thumbnail} alt="target" height={60} width={60}  />
          </div>
          <div className={styles.info}>
            <h3 className={styles['info-heading']}>{props.name}</h3>
            {props.detailed && <p className={styles['info-description']}>{props.description}</p>}
          </div>
  
          <CTA url={props.url} />
        </div>
      </div>
    </div>
  )
};

export default AppCard;
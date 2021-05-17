import React from 'react';

import styles from './styles.module.scss';

const Button = (props) => (
  <React.Fragment>
    <div className={[
      styles.button,
      props.white && styles['button-white'],
      props.stretch && styles['stretch'],
    ].filter(Boolean).join(' ')} {...props}>
      <span>{props.children}</span>
    </div>
  </React.Fragment>
);

export default Button;
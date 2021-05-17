import React from 'react';
import { useRouter } from 'next/router';

import AppCard from '../AppCard';
import Button from '../Button';
// import categories from '../../config/apps/categories.json';
// import marketing from '../../config/apps/marketing.json';
// import salesAndConversion from '../../config/apps/sales-and-conversion.json';
// import ordersAndShipping from '../../config/apps/orders-and-shipping.json';
// import finances from '../../config/apps/finances.json';
// import productivity from '../../config/apps/productivity.json';

import styles from './styles.module.scss';

// const listingMap = {
//   marketing,
//   'sales-and-conversion': salesAndConversion,
//   'orders-and-shipping': ordersAndShipping,
//   finances,
//   productivity
// };

const AppsDisplay = (props) => {
  const categories = props.categories || [];
  const listingMap = props.appsListing || {};
  
  const router = useRouter();
  const [activeCategory, setActiveCategory] = React.useState(categories[0].key);

  return (
    <div className={styles.apps}>
      <div className={styles['content-info']}>
        <h2 className={styles.heading}>We have an app for your need</h2>
        <p className={styles.subheading}>With 120+ apps to choose from, over a dozen brilliant software company founders, and a global company full of people on your side, rest assured: we’ve got you covered.</p>
      </div>
      <div className={styles['apps-display']}>
        <div className={['columns is-desktop'].join(' ')}>
          <div className={['column is-one-thirds', styles['apps-display--left']].join(' ')}>
            <ul className={styles['apps-display-menu']}>
              {
                categories.map(category => (
                  <li
                    key={category.key}
                    className={
                      [
                        styles['apps-display-menu--item'],
                        category.key === activeCategory ? styles['active'] : '',
                      ].join(' ')
                    }
                    data-category={category.key}
                    onClick={() => { setActiveCategory(category.key) }}
                  >
                    {category.name}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={['column is-two-thirds', styles['apps-display-listing']].join(' ')}>
            <div className="columns is-multiline is-gapless is-mobile">
              {
                listingMap[activeCategory] && listingMap[activeCategory].slice(0,4).map(app => (
                  <div className="column is-half" key={app.name}>
                    <AppCard {...app} category={activeCategory} />
                  </div>
                ))  
              }
            </div>
          </div>
        </div>
        <div>
          <Button onClick={() => router.push('/apps')}>More Apps</Button>
        </div>
      </div>
    </div>
  );
};

export default AppsDisplay;
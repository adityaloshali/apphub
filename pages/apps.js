import Head from 'next/head';

import { getAppsListing } from '../lib/utils';
import Layout from '../components/Layout';
import AppCard from '../components/AppCard';

import styles from './apps.module.scss';

export default function Apps(props) {
  const categories = props.categories || [];
  const listingMap = props.appsListing || {};

  return (
    <div>
      <Head>
        <title>Apps | AppHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout categories={categories}>
        <div className={styles.container}>
          <div className={styles['category-menu']}>
            <ul className={styles['category-menu-list']}>
              {
                categories.map(cat => (
                  <li
                    className={styles['category-menu-list__item']}
                    onClick={() => {
                      const section = document.getElementById(`section-${cat.key}`)
                      section.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {cat.name}
                  </li>
                ))
              }
            </ul>
          </div>
          {
            categories.map(category => (
              <div id={`section-${category.key}`} className={styles.section} key={category.key}>
                <div className={styles['section-heading']} data-category={category.key}>{category.name}</div>
                <div className={styles['section-description']}>{category.description}</div>
                <div className={styles['section-apps']}>  
                  {
                    listingMap[category.key] && listingMap[category.key].map(app => (
                      <AppCard
                        key={app.name}
                        {...app}
                        category={category.key}
                        detailed={true}
                      />
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps(context) {
  const appsListing = await getAppsListing();

  return {
    props: { ...appsListing },
  }
} 
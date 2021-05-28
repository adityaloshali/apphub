import Head from 'next/head';

import Layout from '../components/Layout';
import Button from '../components/Button';
import { getAppsListing } from '../lib/utils';

import styles from './about.module.scss';

export default function About(props) {
  return (
    <div>
      <Head>
        <title>About | AppHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout categories={props.categories}>
        <div className={styles.about}>
          <div className={styles.heading}>
            A <span className={styles.spanstyle}>powerful platform</span> for developers & teams
          </div>
          <div className={[styles.section, styles.first].join(' ')}>
            <div className={styles['section-heading']}>Founded to foster <span className={styles.spanstyle}>innovation</span></div>
            <div className={styles['section-divider']} />
            <div className={styles['section-info']}>
              Appfire launched in 2005 as one of the original partners in the Atlassian software ecosystem. From the start, our focus has always been to help teams customize their tools so they can do better work together.

              16 years later and our mission is still the same: support our founders and teams with a powerful platform to build incredible solutions — fueled by innovation and customer feedback.
            </div>
            <Button>MEET THE TEAM</Button>
          </div>

          <div className={[styles.section, styles.second].join(' ')}>
            <div className={styles['section-heading']}>Build something great <span className={styles.spanstyle}>with us</span></div>
            <div className={styles['section-divider']} />
            <div className={styles['section-info']}>
              We started with a great group of developers and business teams to help them. Then, we joined forces with software companies you know and love to provide more resources and better support.

              As we move forward, we continue to seek out the best builders, analysts, support engineers, marketers, and other business professionals with their eyes on providing unique solutions for our customers’ biggest challenges.
            </div>
            <Button>VIEW OPENINGS</Button>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps(context) {
  try {
    const appsListingPromise = getAppsListing();
    const appsListing = await appsListingPromise;
  
    return {
      props: { ...appsListing },
      // revalidate: 60,
    }
  } catch (error) {
    return { articles: [], categories: [], appsListing: [] }
  }
} 
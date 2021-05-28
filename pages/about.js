import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Button from '../components/Button';
import { getAppsListing } from '../lib/utils';

import styles from './about.module.scss';

export default function About(props) {
  const router = useRouter();

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
            <div className={styles['section-heading']}>We build things <span className={styles.spanstyle}>inhouse</span></div>
            <div className={styles['section-divider']} />
            <div className={styles['section-info']}>
              We build apps inhouse to help shop owners customize their tools so they can grow their store better.

              We have a team of hustlers and innovators on this powerful platform who build incredible and innovative apps incorporating customer feedback.
            </div>
            <Button>MEET THE TEAM</Button>
          </div>

          <div className={[styles.section, styles.second].join(' ')}>
            <div className={styles['section-heading']}>We <span className={styles.spanstyle}>aquire</span> amazing apps</div>
            <div className={styles['section-divider']} />
            <div className={styles['section-info']}>
              We seek out the best creators providing unique solutions for our customers biggest challenges. With us you'll help teams and store owners to customize their tools and help them grow big.
              Sell us your amazing idea and join this platform in providing best value and resources to the store owners.
            </div>
            <Button onClick={() => router.push('/sell')}>SELL YOUR APP</Button>
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
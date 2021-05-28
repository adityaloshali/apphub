import Head from 'next/head';

import Layout from '../components/Layout';
import Button from '../components/Button';

import styles from './sell.module.scss';

export default function Sell() {
  return (
    <div>
      <Head>
        <title>Sell | AppHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout categories={[]}>
        <div className={styles.sell}>
          <div className={styles.heading}>
            We make your creation <span className={styles.spanstyle}>profitable</span>
          </div>
          <p className={styles.description}>
            We provide a <span className={[styles.spanstyle, styles['spanstyle-1']].join(' ')}>powerful platform</span> for the app creators to build and sell amazing apps.
            And solve some of the biggest challanges of store owners.
            With us you'll help teams and store owners to customize their tools and help them grow big.
          </p>
          <p className={styles.description}>
            We provide best in the market <span className={[styles.spanstyle, styles['spanstyle-2']].join(' ')}>liquidity</span> for the apps that you sell.
            Our quick and easy procedures ensure that you pocket the best worth of your solution.
          </p>
          <p className={styles.description}>
            We also provide you <span className={[styles.spanstyle, styles['spanstyle-3']].join(' ')}>equity</span> in form of shares.
            You'll always own a fixed share of your app's revenue. It's your cash flowing asset.
          </p>

          <p className={[styles.description, styles['description-cta']].join(' ')}>
            Submit details to initiate the selling process.
          </p>
          <div className={styles.form}>
            <div className={styles['form-group']}>
              <input
                type="text"
                id="appName"
                name="appName"
                placeholder="Enter app name" 
                autocomplete="off"
                required="required"
              />
              <label for="appName">App Name</label>
            </div>
            <div className={styles['form-group']}>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email" 
                autocomplete="off"
                required="required"
              />
              <label for="email">Email</label>
            </div>
            <div className={styles['form-group']}>
              <input
                type="number"
                min={0}
                id="revenue"
                name="revenue"
                placeholder="Enter monthly revenue for app" 
                autocomplete="off"
                required="required"
              />
              <label for="revenue">Monthly Revenue</label>
            </div>
            <div className={styles['form-submit']}>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
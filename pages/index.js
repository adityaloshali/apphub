import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { getAppsListing } from '../lib/utils';
import Layout from '../components/Layout';
import Button from '../components/Button';
import BlogCard from '../components/BlogCard';
import AppsDisplay from '../components/AppsDisplay';
import { fetchAPI } from "../lib/api";

import styles from './index.module.scss';

export default function Home(props) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | AppHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout categories={props.categories}>
        <header>
          <div className={styles.hero}>
            <div className={styles['hero-background']}>
              <Image
                alt="Hero"
                src="/images/hero.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className={styles['hero-content']}>
              <div className={styles['hero-heading']}>
                Shopify apps to serve your big needs.
              </div>
              <button className={styles['glow-on-hover']} type="button" onClick={() => router.push('/apps')}>
                Find Your App
              </button>
            </div>
          </div>
        </header>

        <main className={styles['main']}>
          <div className={styles['speciality']}>
            <div className={styles['speciality-background']}>
              <Image
                alt="Speciality"
                src="/images/speciality.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className={styles['speciality-content']}>
              <div>
                <div className={styles['heading']}>
                  Our Speciality
                </div>
                <p>
                  At AppHub, we use a simple recipe. We look for the best product builders out there, figure out their needs, take away their annoyances, and encourage them to solve important customer challenges in Shopify.
                </p>
              </div>
              <Button onClick={() => router.push('/about')}>
                Learn About Us
              </Button>
            </div>
          </div>

          <AppsDisplay categories={props.categories} appsListing={props.appsListing} />
          <div className={styles['blogs-display']}>
            <h3 className={styles['blogs-display__heading']}>
              Latest News
            </h3>
            <div className={['columns'].join(' ')}>
              {
                props.articles.slice(0, 4).map(article => (
                  <div className="column is-3" key={article.slug}>
                    <BlogCard article={article} />
                  </div>
                ))
              }
            </div>
            <Button onClick={() => router.push('/blogs')}>
              Read More
            </Button>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export async function getStaticProps(context) {
  try {
    const appsListingPromise = getAppsListing();
    const articlesPromise = fetchAPI("/articles?status=published");
  
    const appsListing = await appsListingPromise;
    const articles = await articlesPromise;
  
    return {
      props: { ...appsListing, articles },
      // revalidate: 60,
    }
  } catch (error) {
    return { articles: [], categories: [], appsListing: [] }
  }
} 

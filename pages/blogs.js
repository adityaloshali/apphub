import Head from 'next/head';

import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import { fetchAPI } from '../lib/api';
import { getAppsListing } from '../lib/utils';

import styles from './blogs.module.scss';

export default function Blogs(props) {
  return (
    <div>
      <Head>
        <title>Blogs | AppHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout categories={props.categories}>
        <div className={styles.container}>
          <h3 className={styles.heading}>All Stories</h3>
          <div className={['columns is-multiline'].join(' ')}>
            {
              props.articles.map(article => (
                <div className="column is-3" key={article.slug}>
                  <BlogCard article={article} />
                </div>
              ))
            }
          </div>
        </div>
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
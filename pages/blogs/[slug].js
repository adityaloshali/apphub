import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import gfm from 'remark-gfm';

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Layout from "../../components/Layout";
import Image from "../../components/Image";
import Seo from "../../components/Seo";

import styles from './blog.module.scss';

const Blog = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  console.log(article, 'info')

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className={styles.article}>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={imageUrl}
          data-srcset={imageUrl}
          data-uk-img
        >
          <h1 className={styles.heading}>{article.title}</h1>
        </div>
        <div className="uk-section">
          <div className={['uk-container uk-container-small', styles['content']].join(' ')}>
            <ReactMarkdown remarkPlugins={[gfm]} skipHtml={true}>{article.content}</ReactMarkdown>
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.author.picture && (
                  <Image
                    image={article.author.picture}
                    style={{
                      position: "static",
                      borderRadius: "50%",
                      height: 30,
                    }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  By {article.author.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const articles = await fetchAPI(
      `/articles?slug=${params.slug}&status=published`
    );
    const categories = await fetchAPI("/categories");
  
    return {
      props: { article: articles[0], categories },
      // revalidate: 1,
    };
  } catch (error) {
    return { articles: [], categories: [], appsListing: [] }
  }
}

export default Blog;
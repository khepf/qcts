import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import styles from './index.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Your one-stop resource for Web Design, SEO, Data Analytics and Audio/Video." />
      </Head>
      <section className={styles.herosection}>
        <div className={styles.herodiv1}><p>
        It is a long established fact that a reader will be distracted by
         the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less
           normal distribution of letters
          </p></div>
        <div className={styles.herodiv2}><p>
        It is a long established fact that a reader will be distracted by
         the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less
           normal distribution of letters
          </p></div>
      </section>
      <section>
        <h2>Latest Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}



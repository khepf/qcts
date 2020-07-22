import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Hero from '../components/hero'
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
      <Hero />
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



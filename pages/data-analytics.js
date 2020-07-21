import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function DataAnalyticsPage() {
    return (
    <Layout>
        <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
          <h3>Data Analytics</h3>
      </section>
    </Layout>
    )
}